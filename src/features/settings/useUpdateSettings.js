import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";

import taost from "react-hot-toast";

export function useUpdateSettings() {
  const queryClient = useQueryClient();

  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      taost.success("Successfully updated setting");
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
    },
    onError: (error) => taost.error(error.message),
  });

  return { updateSetting, isUpdating };
}
