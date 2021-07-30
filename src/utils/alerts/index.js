import Swal from "sweetalert2";

export const deletedAlert = (change) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "No, cancel!",
    reverseButtons: true,
  }).then((result) => {
    if (result.isConfirmed) {
      change();
      setTimeout(() => {
        successAlert("Your task has been deleted!");
      }, 1500);
    }
  });
};

export const successAlert = (title) => {
  Swal.fire({
    icon: "success",
    title: title,
    showConfirmButton: false,
    timer: 1000,
  });
};

export const errorAlert = (title) => {
  Swal.fire({
    position: "center-center",
    icon: "error",
    title: title,
    showConfirmButton: false,
    timer: 1500,
  });
};

export const welcomeAlert = () => {
  Swal.fire({
    title: "Welcome to covid-19 app",
    width: "60%",
    padding: "3em",
    background:
      "#fff url(https://biodesign.asu.edu/sites/default/files/news/re%20re%20web-pallette-gif-First-Brownian-motion-and-mask-min.gif)",
  });
};
