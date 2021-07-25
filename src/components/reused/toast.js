import { toast } from "react-toastify";

export const toastMessage = (content, type) => {
  toast[type](content, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })
};
