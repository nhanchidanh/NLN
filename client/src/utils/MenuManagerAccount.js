import icons from "../utils/icons";

const {
  BsPencilSquare,
  MdOutlineContentPaste,
  AiOutlineUser,
  HiOutlineLogout,
} = icons;

export const menuManagerAccount = [
  {
    id: 1,
    text: "Đăng tin cho thuê",
    path: "/create-new",
    icon: <BsPencilSquare />,
  },
  {
    id: 2,
    text: "Quản lý tin đăng",
    path: "/system/manage-post",
    icon: <MdOutlineContentPaste />,
  },
  {
    id: 3,
    text: "Thông tin tài khoản",
    path: "/system/profile",
    icon: <AiOutlineUser />,
  },
  {
    id: 4,
    text: "Đăng xuất",
    path: null,
    icon: <HiOutlineLogout />,
  },
];
