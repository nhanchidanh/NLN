import React, { useEffect, useState } from "react";
import SelectAddressForm from "./SelectAddressForm";
import {
  apiGetPublicDistricts,
  apiGetPublicProvinces,
  apiGetPublicWards,
} from "../services";

const Address = () => {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [province, setProvince] = useState();
  const [district, setDistrict] = useState();
  const [ward, setWard] = useState();
  const [reset, setReset] = useState(false);

  useEffect(() => {
    const fetchPublicProvinces = async () => {
      const response = await apiGetPublicProvinces();
      // console.log(response);
      if (response.status === 200) {
        setProvinces(response?.data?.results);
      }
    };
    fetchPublicProvinces();
  }, []);

  useEffect(() => {
    setDistrict();
    const fetchPublicDistricts = async () => {
      const response = await apiGetPublicDistricts(province);
      // console.log(response);
      if (response.status === 200) {
        setDistricts(response?.data?.results);
      }
    };
    province && fetchPublicDistricts();
    !province ? setReset(true) : setReset(false);
  }, [province]);

  useEffect(() => {
    setWard();
    const fetchPublicWards = async () => {
      const response = await apiGetPublicWards(district);
      // console.log(response);
      if (response.status === 200) {
        setWards(response?.data?.results);
      }
    };
    district && fetchPublicWards();
    !district ? setReset(true) : setReset(false);
  }, [district]);

  console.log({ province, district, ward });

  return (
    <div className="space-y-5">
      <h2 className="font-semibold text-xl py-4">Địa chỉ cho thuê</h2>
      <div className="flex w-full items-center gap-6">
        <SelectAddressForm
          value={province}
          setValue={setProvince}
          options={provinces}
          label={"Tỉnh/Thành phố"}
          type="province"
        />
        <SelectAddressForm
          reset={reset}
          value={district}
          setValue={setDistrict}
          options={districts}
          label={"Quận/Huyện"}
          type="district"
        />
        <SelectAddressForm
          reset={reset}
          value={ward}
          setValue={setWard}
          options={wards}
          label={"Xã/Phường"}
          type="ward"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-medium" htmlFor="exact-address">
          Địa chỉ chính xác
        </label>
        <input
          value={`${
            ward
              ? `${wards?.find((item) => item.ward_id === ward)?.ward_name}, `
              : ""
          }${
            district
              ? `${
                  districts?.find((item) => item.district_id === district)
                    ?.district_name
                },`
              : ""
          } ${
            province
              ? `${
                  provinces?.find((item) => item.province_id === province)
                    ?.province_name
                }`
              : ""
          }`}
          id="exact-address"
          type="text"
          readOnly
          className="border p-2 rounded-md outline-none bg-gray-200 "
        />
      </div>
    </div>
  );
};

export default Address;
