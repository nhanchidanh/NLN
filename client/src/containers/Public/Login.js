import React, { useEffect, useState } from "react";
import { Button, InputForm } from "../../components";
import { useLocation, useNavigate } from "react-router-dom";
import * as actions from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

const Login = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, msg, update } = useSelector((state) => state.auth); //hook nay giup lay gia tri trong reducer

  const [isRegister, setIsRegister] = useState(location.state?.flag);
  // console.log(location);
  const [invalidFields, setInvalidFields] = useState([]);
  const [payload, setPayload] = useState({
    name: "",
    phone: "",
    password: "",
  });

  //Chuyển trạng thái login với đăng ký
  useEffect(() => {
    setIsRegister(location.state?.flag);
  }, [location.state?.flag]);

  // Check login
  useEffect(() => {
    isLoggedIn && navigate("/");
  }, [isLoggedIn]);

  useEffect(() => {
    // console.log(msg);
    msg && Swal.fire("Opps !", msg, "error");
  }, [msg, update]);

  const handleSubmit = async () => {
    // Phan loai payload
    let finalPayload = isRegister
      ? payload
      : {
          phone: payload.phone,
          password: payload.password,
        };

    let invalids = validate(finalPayload);
    // Neu validate kh co loi -> gui api
    if (invalids === 0) {
      isRegister
        ? dispatch(actions.register(payload))
        : dispatch(actions.login(payload));
    }
  };

  const validate = (payload) => {
    let invalids = 0;
    let fields = Object.entries(payload);

    fields.forEach((item) => {
      if (item[1] === "") {
        setInvalidFields((prev) => [
          ...prev,
          {
            name: item[0],
            message: "Bạn không thể bỏ trống trường này.",
          },
        ]);
        invalids++;
      }
    });

    fields.forEach((item) => {
      switch (item[0]) {
        case "password":
          if (item[1].length < 6) {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: item[0],
                message: "Mật khẩu phải có tối thiểu 6 kí tự",
              },
            ]);
            invalids++;
          }
          break;

        case "phone":
          if (!+item[1]) {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: item[0],
                message: "Số điện thoại không hợp lệ",
              },
            ]);
            invalids++;
          }
          break;

        default:
          break;
      }
    });
    return invalids;
  };

  return (
    <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm mx-auto">
      <h3 className="font-semibold text-2xl mb-3">
        {isRegister ? "Đăng ký" : "Đăng nhập"}
      </h3>
      <div className="w-full flex flex-col gap-5">
        {isRegister && (
          <InputForm
            invalidFields={invalidFields}
            setInvalidFields={setInvalidFields}
            label={"HỌ TÊN"}
            value={payload.name}
            setValue={setPayload}
            keyPayload={"name"}
          />
        )}
        <InputForm
          invalidFields={invalidFields}
          setInvalidFields={setInvalidFields}
          label={"SỐ ĐIỆN THOẠI"}
          value={payload.phone}
          setValue={setPayload}
          keyPayload={"phone"}
        />
        <InputForm
          invalidFields={invalidFields}
          setInvalidFields={setInvalidFields}
          label={"MẬT KHẨU"}
          value={payload.password}
          setValue={setPayload}
          keyPayload={"password"}
          type="password"
        />
        <Button
          text={isRegister ? "Đăng ký" : "Đăng nhập"}
          textColor="text-white"
          bgColor="bg-secondary1"
          fullWidth
          onClick={handleSubmit}
        ></Button>
      </div>

      <div className="mt-7 flex items-center justify-between">
        {isRegister ? (
          <small>
            Bạn đã có tài khoản?{" "}
            <span
              className="text-blue-500 hover:underline cursor-pointer"
              onClick={() => {
                setIsRegister(false);
                setPayload({
                  name: "",
                  phone: "",
                  password: "",
                });
              }}
            >
              Đăng nhập ngay
            </span>
          </small>
        ) : (
          <>
            <small className="text-[blue] hover:text-[red] cursor-pointer">
              Bạn quên mật khẩu
            </small>
            <small
              onClick={() => {
                setIsRegister(true);
                setPayload({
                  name: "",
                  phone: "",
                  password: "",
                });
              }}
              className="text-[blue] hover:text-[red] cursor-pointer"
            >
              Tạo tài khoản mới
            </small>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
