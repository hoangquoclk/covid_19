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
    timer: 1000,
  });
};

export const welcomeAlert = () => {
  Swal.fire({
    title: "Welcome to Reminder App",
    width: 600,
    padding: "3em",
    background:
      "#fff url(https://t4.ftcdn.net/jpg/04/21/45/37/360_F_421453773_i50TsddMMSP9uPjIrPQbOFy8fwRQ28Xa.jpg)",
    backdrop: `
      rgba(0,0,123,0.4)
      url("https://daututiendientu.org/wp-content/uploads/2021/05/4cbe8d_f1ed2800a49649848102c68fc5a66e53_mv2.gif")
      left top
      no-repeat
    `,
  });
};
