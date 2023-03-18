import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Button, User } from "../../components";
import * as actions from "../../store/actions";
import { path } from "../../utils/constant";
import icons from "../../utils/icons";
import { menuManagerAccount } from "../../utils/MenuManagerAccount";

const { AiOutlinePlusCircle, BsChevronDown } = icons;

const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const headerRef = useRef();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const goLogin = useCallback((flag) => {
    navigate(path.LOGIN, { state: { flag } });
  });

  useEffect(() => {
    headerRef.current.scrollIntoView({ behavior: "smooth" }); //scroll cho đến khi header nằm trong view frame
  }, [searchParams]);

  const handleLink = (text) => {
    // console.log(text);
    if (text === "Đăng xuất") {
      dispatch(actions.logout());
      setIsShowMenu(false);
    }
  };
  return (
    <div
      ref={headerRef}
      className="w-4/5 mx-auto flex items-center justify-between"
    >
      <Link to={"/"}>
        <img
          src={logo}
          alt="Logo"
          className="w-[240px] h-[70px] object-contain"
        />
      </Link>

      <div className="flex items-center gap-1">
        {/* Logged in */}
        {!isLoggedIn && (
          <div className="flex items-center gap-1">
            <small>Phongtro123.com xin chào!</small>
            <Button
              text={"Đăng nhập"}
              textColor="text-white"
              bgColor="bg-[#3961fb]"
              onClick={() => goLogin(false)}
            />
            <Button
              text={"Đăng ký"}
              textColor="text-white"
              bgColor="bg-[#3961fb]"
              onClick={() => goLogin(true)}
            />
          </div>
        )}

        {isLoggedIn && (
          <div className="flex items-center gap-1 relative">
            <User />
            <Button
              text={"Quản lý tài khoản"}
              textColor="text-white"
              bgColor="bg-blue-700"
              IcAfter={BsChevronDown}
              onClick={() => setIsShowMenu((prev) => !prev)}
            />

            {/* Menu quản lý tài khoản */}
            {isShowMenu && (
              <div className="absolute min-w-[200px] top-full right-0 bg-white shadow-md rounded-md p-4">
                {menuManagerAccount.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="py-2 border-b text-blue-600 hover:text-orange-500"
                    >
                      <Link
                        onClick={() => handleLink(item.text)}
                        to={item?.path}
                        className="flex items-center gap-2"
                      >
                        {item?.icon}
                        {item.text}
                      </Link>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        <Button
          text={"Đăng tin mới"}
          textColor="text-white"
          bgColor="bg-secondary2"
          IcAfter={AiOutlinePlusCircle}
        />
      </div>
    </div>
  );
};

export default Header;
