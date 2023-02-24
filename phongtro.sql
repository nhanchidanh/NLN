-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th2 24, 2023 lúc 03:06 PM
-- Phiên bản máy phục vụ: 10.4.6-MariaDB
-- Phiên bản PHP: 7.2.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `phongtro`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `attributes`
--

CREATE TABLE `attributes` (
  `id` varchar(255) NOT NULL,
  `price` varchar(255) DEFAULT NULL,
  `acreage` varchar(255) DEFAULT NULL,
  `published` varchar(255) DEFAULT NULL,
  `hashtag` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `attributes`
--

INSERT INTO `attributes` (`id`, `price`, `acreage`, `published`, `hashtag`, `createdAt`, `updatedAt`) VALUES
('060e69fb-6de4-43d3-9a42-76d3c2f1e870', '5 triệu/tháng', '30m2', 'Hôm nay', '277052', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('0951e8b4-98a1-4b43-82b6-6c071e58209e', '3.9 triệu/tháng', '25m2', '5 giờ trước', '588451', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('097a4fb1-72f1-427c-87b9-5515ba118843', '4.5 triệu/tháng', '20m2', '49 phút trước', '598936', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('1655281d-8e20-4e3b-a7d7-24d827bd0664', '3.8 triệu/tháng', '20m2', 'Hôm nay', '605027', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('1ef3753e-14ee-46d5-aa7c-b8b4a3414c76', '4.5 triệu/tháng', '22m2', 'Hôm nay', '83144', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('3229657d-bfe4-44e3-8881-dd84081a34d5', '1.4 triệu/tháng', '25m2', 'Hôm nay', '605019', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('3709c870-0f4a-41c5-b57f-3bc6be3e2436', '2 triệu/tháng', '16m2', 'Hôm nay', '310631', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('4a3e65ec-b7ff-44c1-9976-78220943de94', '2 triệu/tháng', '20m2', 'Hôm nay', '58962', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('511dd4d7-eb0f-49ea-8de0-e0b7a60d2b80', '1.5 triệu/tháng', '12m2', 'Hôm nay', '605551', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('61208843-fbe4-4387-b79d-78b9571d50b1', '2.3 triệu/tháng', '20m2', 'Hôm nay', '311800', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('7b52ada7-ba81-4e63-b919-b353e7234a3c', '700.000 đồng/tháng', '20m2', 'Hôm nay', '294491', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('7bdb6c1e-60b8-44e4-8066-212237ede096', '2.5 triệu/tháng', '27m2', '7 phút trước', '66857', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('89a7603f-9c14-4e09-8573-e20da1f5e62f', '3 triệu/tháng', '25m2', 'Hôm nay', '80204', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('a3bc55d1-c256-462b-b337-6da0532ff050', '1.2 triệu/tháng', '30m2', '6 giờ trước', '603516', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('c5755eaa-780e-4d4a-97ac-8bebbece8671', '1.7 triệu/tháng', '20m2', 'Hôm nay', '603145', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('cc837cd5-7c8c-40b5-ba0b-b9a1b72a779d', '1.4 triệu/tháng', '30m2', 'Hôm nay', '605017', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('cd59db4e-9056-4a7e-97b1-dbbce829b572', '3.5 triệu/tháng', '24m2', 'Hôm nay', '282621', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('da4a3275-9c7a-4fbf-8e9d-9948c88a2e63', '900.000 đồng/tháng', '28m2', 'Hôm nay', '605018', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('e1cb5392-6918-4dc2-b47c-549a4d2bbde5', '3.2 triệu/tháng', '16m2', 'Hôm nay', '317927', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('ed4cff53-3ce5-4517-b14f-df910210bbe6', '5 triệu/tháng', '22m2', 'Hôm nay', '59783', '2023-02-24 09:21:58', '2023-02-24 09:21:58');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  `header` varchar(255) DEFAULT NULL,
  `subheader` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `categories`
--

INSERT INTO `categories` (`id`, `code`, `value`, `header`, `subheader`, `createdAt`, `updatedAt`) VALUES
(1, 'CTCH', 'Cho thuê căn hộ', 'Cho Thuê Căn Hộ Chung Cư, Giá Rẻ, Mới Nhất 2022', 'Cho thuê căn hộ - Kênh đăng tin cho thuê căn hộ số 1: giá rẻ, chính chủ, đầy đủ tiện nghi. Cho thuê chung cư với nhiều mức giá, diện tích cho thuê khác nhau.', '2023-02-24 17:33:47', '2023-02-24 17:33:47'),
(2, 'CTMB', 'Cho thuê mặt bằng', 'Cho Thuê Mặt Bằng, Cho Thuê Văn Phòng, Cửa Hàng, Kiot, Mới Nhất 2022', 'Cho thuê mặt bằng - Kênh đăng tin cho thuê mặt bằng, cho thuê cửa hàng, cho thuê kiot số 1: giá rẻ, mặt tiền, khu đông dân cư, phù hợp kinh doanh.', '2023-02-24 17:33:47', '2023-02-24 17:33:47'),
(3, 'CTPT', 'Cho thuê phòng trọ', 'Cho Thuê Phòng Trọ, Giá Rẻ, Tiện Nghi, Mới Nhất 2022', 'Cho thuê phòng trọ - Kênh thông tin số 1 về phòng trọ giá rẻ, phòng trọ sinh viên, phòng trọ cao cấp mới nhất năm 2022. Tất cả nhà trọ cho thuê giá tốt nhất tại Việt Nam.', '2023-02-24 17:33:47', '2023-02-24 17:33:47'),
(4, 'NCT', 'Nhà cho thuê', 'Cho Thuê Nhà Nguyên Căn, Giá Rẻ, Chính Chủ, Mới Nhất 2022', 'Cho thuê nhà nguyên căn - Kênh đăng tin cho thuê nhà số 1: giá rẻ, chính chủ, miễn trung gian, đầy đủ tiện nghi, mức giá, diện tích cho thuê khác nhau.', '2023-02-24 17:33:47', '2023-02-24 17:33:47');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `images`
--

CREATE TABLE `images` (
  `id` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `images`
--

INSERT INTO `images` (`id`, `image`, `createdAt`, `updatedAt`) VALUES
('1ecbeb9e-50e8-4edc-b33d-8590c033333d', '[\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/28/z3600946970304-ca5674183da0a2e71dd8d94192de7d65_1659002334.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/28/z3600949508408-0112c95ab4bcb7b31bccc49f3ad4d78a_16', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('2c288afd-5c87-4531-8aad-58b5e03be038', '[\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/14/8_1657763752.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2020/02/26/tp_1582694811.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/14/1_16577', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('32bd3360-f154-4b8d-bef5-5922e32058e0', '[\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/08/296469816-1665805447118539-7599363110475881569-n_1659943979.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/08/296172521-600367881443341-7742697764947829969-n_1', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('39322ae9-0335-4d8f-91a2-486e2c7b67de', '[\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2018/11/23/wp-20161225-11-09-36-pro_1542975423.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2018/11/23/wp-20151110-10-52-08-pro-1_1542975371.jpg\",\"https://pt123.cdn.static123.c', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('420c3e2c-438c-4234-b4b5-a988ca2818a9', '[\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2021/01/19/img-4316_1611068535.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2021/01/19/img-4249_1611068531.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('4d68dafb-9d6a-43ab-82ce-0d4f182dacc0', '[\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/05/16/1ee31478-d6a4-4d40-a09a-7ce01e44df6a_1652684859.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2020/09/30/b1bb98e2-e0ce-462d-a5a2-d407cdffd0ac_1601433829.jpg\",\"https:/', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('544075ee-8631-49f1-b8fc-51267aeed0c2', '[\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2020/09/10/img-20200612-084030_1599722674.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2020/09/10/img-20200522-080045_1599722703.jpg\",\"https://pt123.cdn.static123.com/images/th', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('5706fdf9-d547-45de-8fb5-af038db6ec47', '[\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/10/e6cb2c1b-f31b-4693-9772-a8fb3cbb6159_1660106078.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/10/f1ad2946-dc33-4005-9eb0-db92f1a75af6_1660106077.jpg\",\"https:/', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('590329ae-3df2-4e1f-847b-57e51d1b81f6', '[\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/08/kinh-nghiem-xay-nha-tro-ben-dep-gia-re-3-370x260_1659940179.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/08/20220401214710-nr5mc_1659940176.jpg\",\"https://pt1', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('5e1b23fc-a645-4b5b-945f-dbdf475fa295', '[\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2019/11/11/untitled-1_1573444898.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2020/10/19/z2133244556301-8a9cbe16e0113f7cf949c696799f1017_1603082723.jpg\",\"https://pt123.cdn.stat', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('5e23d02c-736c-47be-9c61-6b8d4266fc54', '[\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/03/09/hyty_1646820534.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/03/05/k5_1646446171.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/03/05/k4_1', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('5e379322-573e-466d-843b-b9c4647c19fc', '[\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/03/507ce676-0681-4fe6-bac3-55a7eef70fc3_1656803285.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/03/f6480ee4-11fc-453b-882b-25f03a2bd77e_1656803279.jpg\",\"https:/', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('7509a606-a98a-4c6a-a820-dbe03b380a1c', '[\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/27/hinh-2707-sau-khi-sua-9_1658890847.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/27/hinh-2707-sau-khi-sua-7_1658890843.jpg\",\"https://pt123.cdn.static123.com/i', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('7b18a4d9-28ac-4507-8fab-19bdc2775afc', '[\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2020/10/01/z2103932200421-0e8a4a5b053128b54093440156bc117d_1601542084.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2020/10/01/z2103932200420-329870744539e3dbf2643c0bee29341d_16', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('84f43804-6965-4fee-bc53-149b9285820e', '[\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2020/05/20/d0174e91-ec8d-4d5e-86e5-164a730409a3_1589914859.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2020/01/28/3560164d-3dec-415d-9653-134bdefa11bd_1580150006.jpg\",\"https:/', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('8f5c1f9d-3057-454f-9a04-fd4f97cfe032', '[\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2020/08/27/22db9949-3f77-494e-9edf-9b9e79bab876_1598541597.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2020/04/24/img-1452_1587701310.jpg\",\"https://pt123.cdn.static123.com/ima', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('9a1577c2-3274-4898-9c76-829558a0f7e5', '[\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/28/7041eddc052cff72a63d_1658997072.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/28/c97b82136820907ec931_1658997073.jpg\",\"https://pt123.cdn.static123.com/images/', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('a6296029-3013-4cef-9ec7-98fbc28e9a4b', '[\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/09/z3163158670908-88dc233c70dfc3716afc7b376cd2520e_1660008859.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/28/3_1658996883.jpg\",\"https://pt123.cdn.static123.com', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('ba97fbee-733f-446d-af7f-4886f1243edc', '[\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/04/11/242df13a-c719-44b7-a46e-33a0080da507_1649660885.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/04/11/745415c1-4959-42b8-9351-1a366d4b4fa5_1649660883.jpg\",\"https:/', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('e185a7bf-6c40-4a6b-b37a-6c20e90b2d65', '[\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/08/09/z2067452592060-ca1c8692a31370b08a87fa3343a89d27_1660008771.jpg\",\"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/28/z2067453014533-159e2066bc246ba87efb9724ee984819_16', '2023-02-24 09:21:58', '2023-02-24 09:21:58');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `labels`
--

CREATE TABLE `labels` (
  `id` int(11) NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `labels`
--

INSERT INTO `labels` (`id`, `code`, `value`, `createdAt`, `updatedAt`) VALUES
(1, 'XSN7', 'Cho thuê phòng trọ Quận Tân Bình', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
(2, 'TWD7', 'Cho thuê phòng trọ Quận Thủ Đức', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
(3, 'TJI8', 'Cho thuê phòng trọ Quận Tân Phú', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
(4, 'OPF2', 'Cho thuê phòng trọ Quận Tân Bình', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
(5, 'MGO9', 'Cho thuê phòng trọ Quận Tân Bình', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
(6, 'OZW7', 'Cho thuê phòng trọ Quận Bình Thạnh', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
(7, 'VLM9', 'Cho thuê phòng trọ Quận Gò Vấp', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
(8, 'IGC5', 'Cho thuê phòng trọ Quận 7', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
(9, 'EUK8', 'Cho thuê phòng trọ Quận Bình Tân', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
(10, 'GOV2', 'Cho thuê phòng trọ Quận Bình Thạnh', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
(11, 'NYA1', 'Cho thuê phòng trọ Quận 10', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
(12, 'BNF8', 'Cho thuê phòng trọ Quận 7', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
(13, 'GKA8', 'Cho thuê phòng trọ Quận 10', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
(14, 'KGW9', 'Cho thuê phòng trọ Quận 7', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
(15, 'QZD2', 'Cho thuê phòng trọ Quận Bình Thạnh', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
(16, 'WXT2', 'Cho thuê phòng trọ Quận 6', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
(17, 'VJE6', 'Cho thuê phòng trọ Quận 10', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
(18, 'EYL7', 'Cho thuê phòng trọ Quận Bình Thạnh', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
(19, 'YJL3', 'Cho thuê phòng trọ Quận 7', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
(20, 'ZIP2', 'Cho thuê phòng trọ Huyện Nhà Bè', '2023-02-24 09:21:58', '2023-02-24 09:21:58');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `overviews`
--

CREATE TABLE `overviews` (
  `id` varchar(255) NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `area` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `target` varchar(255) DEFAULT NULL,
  `bonus` varchar(255) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `expired` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `overviews`
--

INSERT INTO `overviews` (`id`, `code`, `area`, `type`, `target`, `bonus`, `created`, `expired`, `createdAt`, `updatedAt`) VALUES
('1aa3eb0c-7729-4ed5-89be-e4f2a3250063', '#294491', 'Cho thuê phòng trọ Hồ Chí Minh', 'Phòng trọ, nhà trọ', 'Tất cả', 'Tin VIP 1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('25f7977f-4d70-445e-8852-49b8e03acd51', '#603145', 'Cho thuê phòng trọ Hồ Chí Minh', 'Phòng trọ, nhà trọ', 'Tất cả', 'Tin VIP nổi bật', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('30bb43de-31e3-4249-b194-c02ea24a78f3', '#83144', 'Cho thuê phòng trọ Hồ Chí Minh', 'Phòng trọ, nhà trọ', 'Tất cả', 'Tin VIP nổi bật', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('34f3ff92-20b2-4fa6-936a-b8462b8e6a27', '#66857', 'Cho thuê phòng trọ Hồ Chí Minh', 'Phòng trọ, nhà trọ', 'Tất cả', 'Tin VIP 3', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('639d430b-af8a-4faf-bf02-c08992c0a803', '#317927', 'Cho thuê phòng trọ Hồ Chí Minh', 'Phòng trọ, nhà trọ', 'Tất cả', 'Tin VIP 2', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('759b4645-d87a-4ecd-80bd-2733d28ec041', '#80204', 'Cho thuê phòng trọ Hồ Chí Minh', 'Phòng trọ, nhà trọ', 'Tất cả', 'Tin VIP 1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('80c316f6-f45a-451b-8bd9-fd3c072cd52a', '#588451', 'Cho thuê phòng trọ Hồ Chí Minh', 'Phòng trọ, nhà trọ', 'Tất cả', 'Tin VIP 1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('819431e7-c993-4ab7-bf4a-43cf19d34d16', '#605027', 'Cho thuê phòng trọ Hồ Chí Minh', 'Phòng trọ, nhà trọ', 'Tất cả', 'Tin VIP 1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('837d2e69-b9a6-4eb4-b0a7-668a117368b0', '#58962', 'Cho thuê phòng trọ Hồ Chí Minh', 'Phòng trọ, nhà trọ', 'Tất cả', 'Tin VIP nổi bật', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('85239afc-894f-44df-ad92-da881f24669c', '#605551', 'Cho thuê phòng trọ Hồ Chí Minh', 'Phòng trọ, nhà trọ', 'Tất cả', 'Tin VIP 1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('9cb25af9-4bf5-421b-9c06-6ef28e47e9f8', '#59783', 'Cho thuê phòng trọ Hồ Chí Minh', 'Phòng trọ, nhà trọ', 'Tất cả', 'Tin VIP 2', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('9d95eed7-99bc-4793-8c72-baa0de5594bb', '#605017', 'Cho thuê phòng trọ Hồ Chí Minh', 'Phòng trọ, nhà trọ', 'Tất cả', 'Tin VIP 1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('9e4216f8-4446-48f6-890b-6d514ca65860', '#598936', 'Cho thuê phòng trọ Hồ Chí Minh', 'Phòng trọ, nhà trọ', 'Tất cả', 'Tin VIP 2', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('ab663246-82fb-4a8f-805b-d19af7513885', '#310631', 'Cho thuê phòng trọ Hồ Chí Minh', 'Phòng trọ, nhà trọ', 'Tất cả', 'Tin VIP 2', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('ade36701-ab1a-43c0-aaff-e188236a2b9c', '#605018', 'Cho thuê phòng trọ Hồ Chí Minh', 'Phòng trọ, nhà trọ', 'Tất cả', 'Tin VIP nổi bật', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('b143f659-93b3-4f34-84d3-d24b4dbb1f00', '#603516', 'Cho thuê phòng trọ Hồ Chí Minh', 'Phòng trọ, nhà trọ', 'Tất cả', 'Tin VIP nổi bật', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('cee445f3-4c1b-4d8b-8f67-4ced442f5422', '#311800', 'Cho thuê phòng trọ Hồ Chí Minh', 'Phòng trọ, nhà trọ', 'Tất cả', 'Tin VIP 1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('d8cb6642-1151-4446-aed0-e0fd710ab5a3', '#282621', 'Cho thuê phòng trọ Hồ Chí Minh', 'Phòng trọ, nhà trọ', 'Tất cả', 'Tin VIP 1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('e4260b4c-87bd-4463-ba93-62b07e112ef8', '#277052', 'Cho thuê phòng trọ Hồ Chí Minh', 'Phòng trọ, nhà trọ', 'Tất cả', 'Tin VIP 1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('f96b5430-2d74-488e-bf4b-16ec51cd2ddf', '#605019', 'Cho thuê phòng trọ Hồ Chí Minh', 'Phòng trọ, nhà trọ', 'Tất cả', 'Tin VIP nổi bật', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2023-02-24 09:21:58', '2023-02-24 09:21:58');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `posts`
--

CREATE TABLE `posts` (
  `id` varchar(255) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `star` varchar(255) DEFAULT '0',
  `labelCode` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `attributesId` varchar(255) DEFAULT NULL,
  `categoryCode` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `userId` varchar(255) DEFAULT NULL,
  `overviewId` varchar(255) DEFAULT NULL,
  `imagesId` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `posts`
--

INSERT INTO `posts` (`id`, `title`, `star`, `labelCode`, `address`, `attributesId`, `categoryCode`, `description`, `userId`, `overviewId`, `imagesId`, `createdAt`, `updatedAt`) VALUES
('137b2d0c-7c4a-40f5-be07-43c69b19581b', 'PHÒNG SLEEPBOX RIÊNG TƯ ĐẦY ĐỦ TIỆN NGHI RIÊNG TƯ AN NINH 24/24', '5', 'XSN7', 'Địa chỉ: 50 Đường Phạm Cự Lượng, Phường 2, Quận Tân Bình, Hồ Chí Minh', '3229657d-bfe4-44e3-8881-dd84081a34d5', 'CTPT', '[\"Sleepbox đầy đủ tiện nghi riêng tư an ninh 24/24.\",\"KTX sleepbox cao cấp ngay Phổ Quang (50 Phạm Cự Lượng)\",\"Xách vali vào ở ngay.\",\"Vị Trí Trung Tâm Quận tân Bình\",\"Ngay bệnh viện Tâm Anh\",\"Ưu đãi tháng đầu chỉ còn 1.400.000đ cho 10 bạn đăng kí sớm nhất\",\"Giá bình thường các tháng 1tr6/tháng/người (Bao chi phí điện nước, wifi, máy lạnh, nước uống, rác, ).\",\"Vị trí đẹp thuận lợi:\",\"- Thuận tiện di chuyển sân bay, Cộng Hòa, Hoàng Hoa Thám, Ngã Tư Phú Nhuận, Quận 1, Quận 11, Quaanj 10...\",\"Phòng được trang bị sẵn đầy đủ tiện ích:\",\"- Giường riêng biệt, nệm cao su + drap.\",\"- Tủ quần áo, tủ đồ riêng.\",\"- Đèn học, ổ cắm điện.\",\"- WC riêng, sạch sẽ.\",\"- Khu vực bếp nấu ăn chung (Đầy đủ dụng cụ - lò vi sóng - bếp - xoong nồi... ).\",\"- Nước uống I - On miễn phí\",\"- Wifi siêu tốc.\",\"- Ra vào cửa vân tay.\",\"- Bảo vệ, quản lý 24/7.\",\"- Dọn vệ sinh hằng ngày\",\"- Thang máy, máy giặt, nơi phơi đồ riêng.\",\"- Hệ thống camera an ninh.\",\"- Chỗ sinh hoạt luôn được vệ sinh sạch sẽ.\",\"Địa chỉ: Cs1: 50 Phạm Cự Lượng, Phường 2, Tân Bình\",\"CS2: 69/38/11 Nguyễn Gia Trí, P. 25, Bình Thạnh..\",\"CS3: 60/18A Huỳnh Khương An, Phường 5, Gò Vấp.\",\"Liên Hệ: 0896.119.779 ( Zalo + SDT )\"]', '8c509711-57a1-49b6-8777-e6b0d5de693f', 'f96b5430-2d74-488e-bf4b-16ec51cd2ddf', '9a1577c2-3274-4898-9c76-829558a0f7e5', '2023-02-24 09:21:57', '2023-02-24 09:21:57'),
('42b69f4d-999b-4293-ab4b-d104d53cfecb', 'Phòng trọ cho thuê ngắn hạn hoặc dài hạn đầy đủ nội thất, tiện nghi vào ở ngay', '4', 'WXT2', 'Địa chỉ: 336/10 Nguyễn Văn Luông, Phường 12, Quận 6, Hồ Chí Minh', '1655281d-8e20-4e3b-a7d7-24d827bd0664', 'CTPT', '[\"Cho thuê phòng trọ ngắn hạn hoặc dài hạn trang bị sẵn full nội thất rất tiện nghi, có thang máy, vào ở ngay.\",\"Vị trí: cách vòng xoay Phú Lâm 200m, gần ngã tư Hậu Giang, gần chợ lớn, khu ăn uống sầm uất. \",\"Nội thất: tivi, tủ lạnh, máy lạnh, giường, nệm, tủ quần áo, bàn trang điểm,... toilet riêng.\",\"Phòng nhỏ 20m2 (1 giường rộng), giá 3.8 triệu/tháng (ở 2 người)\",\"Phòng lớn 40m2 (2 giường rộng), giá 6 triệu/tháng (ở 4 người)\",\"Điện 3,5k, nước 100k/người, xe 100k/chiếc.\",\"Vệ sinh: 100k. \",\"Liên hệ: Anh Cảnh - 0913635257 - 0913665257\",\"Hoặc: 028.38858278\",\"Tất cả giảm thêm 10% nếu ở trên 3 tháng.\"]', 'd153377b-237c-4bf8-a9d3-3c14a82e26d0', '819431e7-c993-4ab7-bf4a-43cf19d34d16', '1ecbeb9e-50e8-4edc-b33d-8590c033333d', '2023-02-24 09:21:57', '2023-02-24 09:21:57'),
('48553a6c-675f-477c-9794-b952f1e18664', 'PHÒNG KTX ĐẠI HỌC CÔNG NGHIỆP (200M) THANG MÁY, MÁY LẠNH, MÁY GIẶT, WIFI, BẾP', '5', 'VLM9', 'Địa chỉ: 60/18A Đường Huỳnh Khương An, Phường 5, Quận Gò Vấp, Hồ Chí Minh', 'da4a3275-9c7a-4fbf-8e9d-9948c88a2e63', 'CTPT', '[\"Be Home ký túc xá đáng sống.\",\"Ngay cổng 4 đại học Công Nghiệp TP. HCM - 200m. Đi bộ 3P.\",\"Giờ giấc tự do.\",\"Ưu đãi giá 900k/tháng đầu tiên cho 20 bạn đăng kí sớm nhất.\",\"Địa chỉ: 60/18A Huỳnh Khương An, Phường 5, Quận Gò Vấp, TP. HCM.\",\"Không gian rộng, có cửa sổ.\",\"Trang bị giường, nệm và drap mới.\",\"Máy lạnh.\",\"Nhà vệ sinh riêng.\",\"Có bếp nấu ăn riêng trong phòng.\",\"Hệ thống wifi công nghiệp mạnh mẽ, ổn định.\",\"Trang bị máy giặt và nơi phơi đồ.\",\"Không gian đảm bảo luôn được vệ sinh sạch sẽ.\",\"Thang máy tiện lên xuống, camera an ninh, bảo vệ 24/7.\",\"Khu tập thể dục thể thao rộng rãi.\",\"Đảm bảo điều kiện sống cho bạn một cách tốt nhất.\",\"Phòng 6 giường.\",\"Giá: 1tr3/người phòng thường.\",\"1tr5/người phòng máy lạnh.\",\"Liên hệ: 0896.119.779 (Zalo + SDT)\"]', 'f70c46fc-92fc-4f44-9a26-c06719cd2cd9', 'ade36701-ab1a-43c0-aaff-e188236a2b9c', 'a6296029-3013-4cef-9ec7-98fbc28e9a4b', '2023-02-24 09:21:57', '2023-02-24 09:21:57'),
('4ff17762-1574-47b4-9f42-7ae0d0bde9a1', 'Cho thuê phòng trọ đầy đủ nội thất, đường 3/2, khu Kỳ Hòa, Quận 10', '3', 'VJE6', 'Địa chỉ: 181/36 Đường số 3/2, Phường 11, Quận 10, Hồ Chí Minh', 'ed4cff53-3ce5-4517-b14f-df910210bbe6', 'CTPT', '[\"Chính chủ cho thuê phòng rộng khu trung tâm, an  ninh, yên tĩnh, hẻm chính 7m, tiện đi lại, phòng rộng 22m2. Tiện nghi đầy đủ như khách sạn, máy lạnh, nước nóng, tivi LDC, tủ lạnh, giường tủ, bàn ghế...\",\"Giờ giấc tự do, có chỗ để xe.\",\"- Địa chỉ: 181/36 Đường 3/2, P.11, Quận 10.\",\"Giá thuê: 5 triệu/tháng.\",\"Liên hệ: 0919.990.528 Chị Vân - Chính chủ\"]', 'f963a385-b7a6-4423-a02f-d684dae4acfd', '9cb25af9-4bf5-421b-9c06-6ef28e47e9f8', '7b18a4d9-28ac-4507-8fab-19bdc2775afc', '2023-02-24 09:21:57', '2023-02-24 09:21:57'),
('5f76527d-81d7-484b-9af3-852e027ab7a2', 'Cực phẩm KTX, Phòng trọ, Sang, Xịn, Mịn Giá siêu rẻ tại Thủ Đức', '5', 'TWD7', 'Địa chỉ: 101 Đường số 8, Phường Linh Đông, Quận Thủ Đức, Hồ Chí Minh', 'a3bc55d1-c256-462b-b337-6da0532ff050', 'CTPT', '[\"> Giá trọn gói, không phát sinh bất cứ khoản phí nào nữa.\",\"*** Miễn phí :\",\"- Để xe máy ( Để xe trong sân cực rộng và thoáng)\",\"- Điện, nước.\",\"- Wifi, rác, vệ sinh - Nước uống. ....\",\"*** Nội thất gồm : - Giường, Chăn, Ga, Gối, Nệm, đèn đọc sách, bàn học, gương trang điểm, tủ quần áo ( mỗi người 2 tủ ), tủ tài chính, tất cả đều là hàng cao cấp ( các bạn xem hình là hiểu, hình thật 100% ). Có phòng nấu ăn và phòng sinh hoạt chung - Máy lạnh, máy giặt, tivi, tủ lạnh ( mỗi phòng 1 tủ để trong phòng ) không thiếu bất cứ thứ gì. - Khoá Vân tay 2 chiều. - Tolet riêng trong phòng ( có nước nóng năng lượng mặt trời ). ***** Đặc biệt: Dịch vụ vệ sinh miễn phí Tollet , phòng, hành lang 2 lần 1 tuần. Cảm ơn các bạn đã xem tin. Nếu xem phòng vui lòng call :\",\"Mr Bình. 0936.456.678.\",\"Địa chỉ : 101 Đường số 8, Phường Linh Đông. Q. Thủ Đức\"]', 'b4e28f40-e4f9-48db-843c-dfb76011c8a6', 'b143f659-93b3-4f34-84d3-d24b4dbb1f00', '5e379322-573e-466d-843b-b9c4647c19fc', '2023-02-24 09:21:57', '2023-02-24 09:21:57'),
('74c8b7ac-67ef-4347-8b16-ce9c58ba927e', 'CHO THUÊ PHÒNG TRỌ GIÁ SIÊU RẺ GẦN KHU CÔNG NGHIỆP POUYUEN', '4', 'EUK8', 'Địa chỉ: 1665 Đường Tỉnh Lộ 10, Phường Tân Tạo A, Quận Bình Tân, Hồ Chí Minh', '511dd4d7-eb0f-49ea-8de0-e0b7a60d2b80', 'CTPT', '[\"+Gần khu công nghiệp Pouyuen và khu công nghiệp Tân Tạo\",\"+Có wifi\",\"+Có gác lửng rộng rãi với diện tích 4*1,97=7,88m2\",\"+Phòng trọ sạch sẽ\",\"+Diện tích 4m*3m=12m2\",\"+Có nước máy\"]', 'db110d00-51ef-43a8-98e2-c48da9431b42', '85239afc-894f-44df-ad92-da881f24669c', '590329ae-3df2-4e1f-847b-57e51d1b81f6', '2023-02-24 09:21:57', '2023-02-24 09:21:57'),
('7830579a-3691-40aa-9bc9-dee62b89c493', 'Chỉ 3.9 Triệu, Phòng Rộng Rãi, Đầy Đủ Nội Thất Cơ Bản, Giảm ngay 10% tiền nhà tháng đầu!', '4', 'OPF2', 'Địa chỉ: 74 Đường Xuân Diệu, Phường 4, Quận Tân Bình, Hồ Chí Minh', '0951e8b4-98a1-4b43-82b6-6c071e58209e', 'CTPT', '[\"CÒN DUY NHẤT 1 PHÒNG CÓ NỘI THẤT ĐẦY ĐỦ.\",\"GIÁ CHỈ 3 TRIỆU 900K\",\"Mình chính chủ cho thuê nha!\",\"————————————————\",\"MÔ TẢ PHÒNG\",\"- Phòng rộng rãi, thoáng mát, có gác, có cửa sổ lớn.\",\"- Full nội thất: tủ quần áo, gối nệm, máy lạnh, kệ bếp, WC riêng...\",\"- Có chỗ để xe, giờ tự do, không chung chủ.\",\"- Camera 24/24, cửa khoá vân tay, KV an ninh.\",\"————————————————\",\"VỊ TRÍ:\",\"- Gần Sân Bay Tân Sơn Nhất chỉ 5 phút.\",\"- Ngay sát bên Trường Cao Đẳng Lý Tự Trọng TPHCM.\",\"- 1 phút tới Trường Trung cấp Tài Chính - Kế Toán\",\"- 5 phút tới Trường ĐH Tài Chính Marketing\",\"- 7 phút tới Trường ĐH Bách Khoa.\",\"- 2 phút ra Chợ Hoàng Hoa Thám và Coop Food.\",\"- Di chuyển qua Phú Nhuận, Quận 10 chỉ 5-7 phút.\",\"- Bước xuống đường là vô vàn tiện ích, quán ăn khắp nơi.\",\"————————————————\",\"CHI PHÍ SINH HOẠT:\",\"- Điện 3.500/kw\",\"- Nước 100.000/người\",\"- Chỗ để xe Free\",\"- Có Wifi đầy đủ.\",\"————————————————\",\"“CAM KẾT HÌNH THẬT, NẾU HÌNH KHÔNG ĐÚNG TẶNG NGAY 2 TRIỆU VÌ CÔNG ĐẾN XEM”\",\"————————————————\",\"Địa chỉ: 74 Xuân Diệu, P.4, Tân Bình\",\"Xem phòng liên hệ mình chủ nhà nhé!\",\"(Có hoa hồng tốt cho MG, miễn đăng tin quảng cáo)\"]', 'faba432f-d42e-4067-a395-fd3b638d4694', '80c316f6-f45a-451b-8bd9-fd3c072cd52a', '5706fdf9-d547-45de-8fb5-af038db6ec47', '2023-02-24 09:21:57', '2023-02-24 09:21:57'),
('87cb28f6-23bf-4ee7-b72c-e8be2a69921d', 'Phòng trọ mới, sạch đẹp, ngay trung tâm, giá rẻ, chính chủ.', '4', 'GKA8', 'Địa chỉ: 358/4 Đường Điện Biên Phủ, Phường 11, Quận 10, Hồ Chí Minh', 'cd59db4e-9056-4a7e-97b1-dbbce829b572', 'CTPT', '[\"Cho thuê phòng trọ, lầu đúc, sạch đẹp,có sân thượng, ngay trung tâm, đối diện bệnh viện Bình Dân, gần trường học, chợ Vườn Chuối, thuận tiện đi lại cho người đi làm, đi học.Có wifi, truyền hình cáp, nước lạnh, nước nóng năng lượng mặt trời, nhà vệ sinh trong phòng, có chỗ để xe trong nhà không tốn phí( mỗi người một chiếc xe không tốn tiền gửi xe ), an toàn.\",\"Khu vực yên tĩnh, an ninh.\",\"Đồng hồ điện, nước riêng.Có thể ở 1 hoặc 2 người.\",\"-Phòng 24m2 có cửa sổ, giá 3.500.000đ/phòng/tháng ( ở 1 hoặc 2 người).\",\"PHÒNG TRỐNG-DỌN VÀO Ở NGAY.\",\"Liên hệ cô Bích Thủy : 0983.344.682\",\"Xem phòng tại 358/4 Điện Biên Phủ P11 Q10 (Khi đến xem phòng xin gọi điện trước).\"]', 'f979f9ff-51d0-4b95-a14f-500eed849fb5', 'd8cb6642-1151-4446-aed0-e0fd710ab5a3', '32bd3360-f154-4b8d-bef5-5922e32058e0', '2023-02-24 09:21:57', '2023-02-24 09:21:57'),
('89895d6f-e65b-4484-bda7-a352ca44b182', 'Cho thuê phòng trọ 128/46 Thiên Phước, P.9, Q.Tân Bình (gần vòng xoay Lê Đại Hành)', '5', 'MGO9', 'Địa chỉ: 128/46 Đường Thiên Phước, Phường 9, Quận Tân Bình, Hồ Chí Minh', '4a3e65ec-b7ff-44c1-9976-78220943de94', 'CTPT', '[\"Cho thuê phòng trọ gần vòng xoay Lê Đại Hành + Đại Học Bách Khoa.\",\". Địa chỉ: 128/46 Thiên Phước, P.9, Q.Tân Bình . .\",\". Phòng có tolet riêng, gác lửng + cửa sổ thoáng mát . .\",\". Còn p giá từ 2tr\",\". Có ban công phơi đồ, wifi 80mb cực mạnh free . .\",\". Bạn bè lại chơi nấu ăn trong phòng thoải mái . .\",\". Để xe trong sân nhà thoáng mát có mái che & bảo vệ coi\",\". Điện 3k5/1 số, nước máy 100k/1 người, giữ xe 120k/1 chiếc . .\",\". Vị trị thuận lợi ra Lý Thường Kiệt, Bắc Hải, Lê Đại Hành, Hoàng Văn Thụ , Âu Cơ , 3 tháng 2 , CMT8 chỉ trong 5p .\",\". LH : 0906878018 (Hùng) chính chủ .\"]', '212d4883-519f-4d08-af38-2e2d440ba4cd', '837d2e69-b9a6-4eb4-b0a7-668a117368b0', '2c288afd-5c87-4531-8aad-58b5e03be038', '2023-02-24 09:21:57', '2023-02-24 09:21:57'),
('8cd17e6c-d312-4d9b-9295-c349e582f7a0', 'PHÒNG CHO THUÊ NGAY LOTTE Q.7 - CHỈ TỪ 3TR - BAO GIÁ TỐT - Alo 0988.373.731', '4', 'KGW9', 'Địa chỉ: 80 Đường số 3, Phường Tân Kiểng, Quận 7, Hồ Chí Minh', '89a7603f-9c14-4e09-8573-e20da1f5e62f', 'CTPT', '[\"Các tiện ích chỉ có ở tại Fullhouse ngay Lotte Q.7. 100% cư dân đều đã chích vacxin 2 mũi và dân trí cao, tuân thủ 5K và pháp luật.\",\"Ngay Lotte Q.7 (đi bộ 2 phút đến đại siêu thị)! Alo ngay: 0988.373.731 Ms Hòa.\",\"Ngay dưới tòa nhà là \\\"Thiên đường Ốc\\\" đủ các món ăn ngon\",\"Căn phòng dành cho bạn thì đầy đủ tiện nghi, tiết kiệm điện và bảo vệ môi trường với hệ đèn LED - Nước nóng năng lượng mặt trời - Máy lạnh Inverter - WC và bếp riêng tiện nghi và tự do.\",\"Tòa nhà luôn được vệ sinh sạch sẽ để bảo vệ sức khỏa toàn bộ dân cư.Tòa nhà xài hệ thống NLMT và máy lạnh Inverter giúp tiết kiệm điện.\",\"Tòa nhà 8 tầng mới xây sạch,đẹp,văn minh thoáng mát, an ninh. Liền kề 5 phút đến Q1, Q4, Q5, Q8, Crescent Mall, SC Vivo, vị trí vàng đẹp Q. 7...Thuê chỗ ở bây giờ cần phải đảm bảo an toàn PCCC tuyệt đối. Tòa nhà căn hộ cho thuê cao cấp của chúng tôi có thẩm duyệt PCCC và đã nghiệm thu PCCC kèm theo bảo hiểm đảm bảo an toàn cho toàn bộ cư dân sống và làm việc tại đây, có an cư, an toàn mới lạc nghiệp.\",\"Giá từ 3.0 - 4.5 triệu/tháng, bao giá tốt khắp khu vực.\",\"Alo ngay: 0988.373.731 Ms Hòa.\",\"Đảm bảo 100% sự hài lòng.\",\"80 Đường Số 03, P. Tân Kiểng, Q. 7 - LH: 0988.373.731 Ms Hòa.\"]', '89965207-d1b6-472e-8f2b-c49791a60cf2', '759b4645-d87a-4ecd-80bd-2733d28ec041', '5e1b23fc-a645-4b5b-945f-dbdf475fa295', '2023-02-24 09:21:57', '2023-02-24 09:21:57'),
('96c0dfdb-b634-41bf-a684-e4b41627b1fb', 'Ở ghép trọn gói 700k gần Lotte Mart', '4', 'IGC5', 'Địa chỉ: 34 Phố số 36, Phường Tân Quy, Quận 7, Hồ Chí Minh', '7b52ada7-ba81-4e63-b919-b353e7234a3c', 'CTPT', '[\"Đến Homestay Hoàng Phúc – hệ thống Kytucxa Q7 rẻ nhất Sài Gòn với những căn phòng đẹp lung linh chuẩn 2 sao, đa dạng tiện nghi và bao trọn toàn bộ các chi phí (cam kết 100% không phát sinh).\",\"CHỈ 9️⃣0️⃣0️⃣.0️⃣0️⃣0️⃣/ THÁNG( KM 200K tháng đầu chỉ còn 7️⃣0️⃣0️⃣.0️⃣0️⃣0️⃣/ THÁNG )\",\"TIỆN ÍCH NỔI TRỘI TẠI ĐÂY:\",\"Giường tầng riêng tư, có tủ đồ, móc treo thông minh\",\"Máy lạnh inverter, wifi tốc độ cao\",\"Nhà vệ sinh riêng, sạch sẽ\",\"Nhân viên dọn phòng hằng ngày\",\"Tự do dùng máy giặt,bình lọc nước\",\"Khu để xe rộng, được camera giám sát.\",\"⏰ ⏰ môi trường văn minh\",\"Ngoài ra còn có:\",\"Camera An ninh, quản lý tâm huyết.\",\"Không gian bếp lớn đầy đủ thiết bị.\",\"Có khu phơi quần áo riêng.\",\"Vị trí ở trung tâm, mức sống dễ chịu, thuận lợi đi lại và ăn uống và rất nhiều các chi nhánh để các chọn lựa gần chỗ làm nơi học.\",\"Địa chỉ các cơ sở chi nhánh KTX:\",\"️CN1: 34 đường 36, P. Tân Quy, Q.7\",\"Các chi nhánh khác:\",\"️CN2: 1134/14A Huỳnh Tấn Phát, Q.7\",\"️CN3: Hẻm 350 Huỳnh Tấn Phát, Q.7\",\"️CN4: 233/11/6 Nguyễn Trãi, P2, Q.5\",\"️ CN5: 84 Nguyễn Tất Thành, Q.4\",\"CÒN CHẦN CHỜ GÌ NỮA NHANH TAY LIÊN HỆ CHO MÌNH 1 CHỖ\",\"Điện thoại: 0931313570\"]', '06d0177f-9ac9-41f9-bc71-a19e6e0a96aa', '1aa3eb0c-7729-4ed5-89be-e4f2a3250063', '84f43804-6965-4fee-bc53-149b9285820e', '2023-02-24 09:21:57', '2023-02-24 09:21:57'),
('9777922d-c5fa-4974-b61b-98f560ec947d', 'Cho thuê nhà trọ mặt tiền 8m, giá rẻ, sạch, đẹp, tự do..chỉ còn 1 căn duy nhất', '2', 'ZIP2', 'Địa chỉ: P02- 1874/11/6 Đường Lê Văn Lương, Xã Nhơn Đức, Huyện Nhà Bè, Hồ Chí Minh', '7bdb6c1e-60b8-44e4-8066-212237ede096', 'CTPT', '[\"Nhà trọ 2 mặt tiền đường 8m, 27m2 .\",\"Đúc lửng, WC rộng, bếp riêng biệt trong phòng, trần la phông thạch cao, ốp, lát gạch men, sạch sẽ, rộng rãi thoáng mát, Phòng riêng mới, sinh hoạt độc lập, tự do, xe ô tô vào tận cửa. \",\"Gần khu công nghiệp Hiệp Phước, Long Hậu, gần chợ Nhơn Đức.Cách Nguyễn Văn Linh 6km, qua cầu Rạch Tôm 200m. Phòng đang trống vào ở ngay, HĐ 1 năm, cọc 1 tháng, trả trước tiền thuê, điện 2,500/kw, nước 17k/m3. ưu tiên nhân viên văn phòng, sinh viên\",\"Địa chỉ: 1874/11/6 Lê Văn Lương, xã Nhơn Đức, Nhà Bè ( Phòng 04)\"]', '8b2c8bf6-9296-45fe-8a72-3521cd48f05a', '34f3ff92-20b2-4fa6-936a-b8462b8e6a27', '39322ae9-0335-4d8f-91a2-486e2c7b67de', '2023-02-24 09:21:57', '2023-02-24 09:21:57'),
('ab309f99-257a-4b9b-9d2d-a363506787c5', 'Phòng máy lạnh, giường, máy giặt đầy đủ tiện nghi', '4', 'BNF8', 'Địa chỉ: 350 Đường Huỳnh Tấn Phát, Phường Bình Thuận, Quận 7, Hồ Chí Minh', '61208843-fbe4-4387-b79d-78b9571d50b1', 'CTPT', '[\"Bên mình còn 1 phòng dịch vụ bên Quận 7\",\"1.) Phòng có máy lạnh, giường, máy giặt giá 2tr3 . Địa chỉ: 350 Huỳnh tấn phát Q7\",\"Liên hệ: 0931313570\"]', '4733f3c8-9ebe-4a37-b5d7-5bd4b7e777fb', 'cee445f3-4c1b-4d8b-8f67-4ced442f5422', '4d68dafb-9d6a-43ab-82ce-0d4f182dacc0', '2023-02-24 09:21:57', '2023-02-24 09:21:57'),
('ae8eda33-536a-4501-852c-ab49ebc879da', 'Cho thuê phòng 20m2 nhà mới xây tại 32/40/38 Đường Bùi Đình Túy, Phường 12, Quận Bình Thạnh', '3', 'QZD2', 'Địa chỉ: 32/40/38 Đường Bùi Đình Túy, Phường 12, Quận Bình Thạnh, Hồ Chí Minh', '097a4fb1-72f1-427c-87b9-5515ba118843', 'CTPT', '[\"- Nhà mới xây xong, nội thất đẹp, hiện đại\",\"- Phòng đầy đủ tiện nghi, mát mẻ\",\"- Có máy lạnh, toilet khép kín trong phòng\",\"- Có giường hộp hiện đại, nệm\",\"- Có bàn làm việc, học tập, tủ lạnh\",\"- Có tủ quần áo rộng rãi\",\"- Giặt và phơi quần áo sân thượng, có máy giặt\",\"- Free wifi, nước nóng lạnh năng lượng mặt trời\",\"- Vị trí yên tĩnh, phù hợp cho sinh viên học hành, người đi làm nghỉ ngơi sau giờ làm\",\"- Gần chợ, siêu thị, phòng gym, nhiều tiện ít xung quanh, giờ giấc tự do\",\"- Phòng ban công\",\"- Điện 3,5k/1kw. Nước 100k/ người\"]', '074e1445-847f-4f14-a65c-119cbf30604d', '9e4216f8-4446-48f6-890b-6d514ca65860', 'ba97fbee-733f-446d-af7f-4886f1243edc', '2023-02-24 09:21:57', '2023-02-24 09:21:57'),
('bc6f7391-5c6f-4ca0-9530-f09cb91ab952', 'Căn hộ mới xây 30m2 full nội thất - đường D2 Bình Thạnh', '4', 'OZW7', 'Địa chỉ: 213/8 Đường Nguyễn Gia Trí (D2), Phường 25, Quận Bình Thạnh, Hồ Chí Minh', '060e69fb-6de4-43d3-9a42-76d3c2f1e870', 'CTPT', '[\"PHÒNG CHO THUÊ SẠCH ĐẸP, AN NINH, TIỆN NGHI ĐƯỜNG NGUYỄN GIA TRÍ (D2) – BÌNH THẠNH\",\"Chào cả nhà,\",\"Nhằm ổn định nơi ở mới cho các bạn tân sinh viên 2022 cũng như người đi làm, tòa nhà bên mình còn các căn hộ studio cho mọi người lựa chọn như sau:\",\"- Địa chỉ: 213/8 Nguyễn Gia Trí (D2 cũ), P.25, Q.Bình Thạnh, TP. HCM\",\"Cách Đại học: Hutech 100m (đi bộ đi học), Giao Thông Vận Tải (100m), Ngoại Thương (100m), UEF (300m), Hồng Bàng (300m)\",\"- Diện tích:\",\"28m2, 30m2, 33m2, 40m2\",\"Giá thuê:\",\"5,000,000 - 6,200,000/ tháng\",\"Có thể ở từ 4 – 5 người/ phòng\",\"- Tiện ích căn phòng:\",\"Máy lạnh 1,5 ngựa tiết kiệm điện\",\"Tủ lạnh\",\"Máy giặt (ở hành lang)\",\"Có chỗ phơi đồ rộng rãi, thoáng mát\",\"Tủ quần áo gỗ\",\"Cửa sổ thoáng mát\",\"Bếp nấu ăn + bồn rửa chén\",\"Tủ chén treo tường\",\"Toilet riêng trong phòng + thiết bị vệ sinh hiện đại\",\"Tầng đúc kiên cố rộng 12m2 trong phòng\",\"Wifi riêng cho từng phòng, rất mạnh\",\"-Tiện ích tòa nhà:\",\"Có đội ngũ bảo vệ tòa nhà 24/24\",\"Camera an ninh khắp tòa nhà đảm bảo an ninh tuyệt đối\",\"Có đội ngũ quản lý toà nhà sẵn sàng hỗ trợ\",\"Thang máy phân tầng hiện đại\",\"Giờ giấc tự do\",\"Dịch vụ vệ sinh tòa nhà 3 lần/ tuần miễn phí, đảm bảo luôn sạch sẽ, gọn gàng, ngăn nắp\",\"Điện: 4k/kw; nước: 100k/ người/ tháng; giữ xe: 150k/ xe/ tháng\",\"Mời cả nhà nhanh tay đặt phòng!\",\"Xin mời liên hệ:\",\"093 510 1516 (Ms Đào) ; 090 1377 959 (Mr. Huy)\"]', '3feff122-b6b2-4380-b5dc-f7da720ee62b', 'e4260b4c-87bd-4463-ba93-62b07e112ef8', '8f5c1f9d-3057-454f-9a04-fd4f97cfe032', '2023-02-24 09:21:57', '2023-02-24 09:21:57'),
('c39368a5-fc61-40dd-8820-cb747e49f574', 'PHÒNG TRỌ MỚI SỬA 7/2022 48/13 LƯƠNG THẾ VINH, Phường TÂN THỚI HÒA, TÂN PHÚ (GẦN ĐẦM SEN)', '5', 'TJI8', 'Địa chỉ: 48/13 Đường Lương Thế Vinh, Phường Tân Thới Hòa, Quận Tân Phú, Hồ Chí Minh', 'c5755eaa-780e-4d4a-97ac-8bebbece8671', 'CTPT', '[\"Giá Phòng từ 1700k đến xem đảm bảo ưng ý, cam kết hình đúng với thực tế\",\"Phòng mới sửa chữa cuối tháng 7/2022, địa chỉ 48/13 Lương Thế Vinh Phường Tân Thế Hòa, Q.Tân Phú, nhà hẽm xe hơi lộ giới 5m .\",\"Diện Tích 12m + 8m ( gác lững )\",\"Phòng có tolet riêng, cửa sổ, ban công, có phòng dưới trệt\",\"Cho nấu ăn trong phòng, Ở được 2-4 người, bạn bè lại chơi thoãi mái.\",\"Miễn phí internet, wifi, truyền hình cáp, Camera 15 cái ( an ninh quan sát không góc chết )\",\"Để xe trong sân nhà thoáng mát có bảo vệ coi 24/24\",\"Vị trí gần Đầm Sen, thuận tiện qua lại Q.6, Q.11, Tân Phú\",\"Điện 3,5k/ 1 ký, nước 70k / 1 người, xe 100k/ 1 chiếc .\",\"Xe để sân sau nhà có người quản lý và trông coi ( không chung chủ ) giúp bạn có cảm giác an toàn, thoải mái\",\"LH : 0938.864.405 ( Cường )\"]', 'fdd70489-53d0-4a0e-ae48-6cd8228061bf', '25f7977f-4d70-445e-8852-49b8e03acd51', '7509a606-a98a-4c6a-a820-dbe03b380a1c', '2023-02-24 09:21:57', '2023-02-24 09:21:57'),
('c7bbff6d-9ab7-4227-bb79-c7a1374595f2', 'Cho thuê phòng cao cấp, đầy đủ tiện nghi, như căn hộ, ngay trung tâm Quận 10', '5', 'NYA1', 'Địa chỉ: 128 Đường Thành Thái, Phường 14, Quận 10, Hồ Chí Minh', '1ef3753e-14ee-46d5-aa7c-b8b4a3414c76', 'CTPT', '[\"Cho thuê phòng đẹp trung tâm Quận 10 tiện nghi:\",\"- Địa chỉ 1: 7A/19/19 Thành Thái, P.14, Q.10.\",\"- Địa chỉ 2: 128 Thành Thái, P.12, Q. 10\",\"Cho thuê phòng trọ nằm cạnh siêu thị Sài Gòn, ngân hàng, gần ngay ngã tư 3/2- Thành Thái - Nguyễn Tri Phương. Gần đại học Kinh Tế TP HCM, Bách Khoa TP HCM, Y Dược. Giao thông thuận tiện, gần chợ trạm xe bus.\",\"Mặt tiền nhà đẹp, hẻm trước nhà 8m xe hơi quay đầu được\",\"Vị trí trung tâm thành phố giáp ngay Quận 1, Quận 3, Tân Bình, Phú Nhuận. Cho bạn thuận tiện trong công việc.\",\"Nhà có thang máy, chỗ để xe rộng rãi.\",\"Phòng rộng từ 22m2 - 35m2, được trang bị đủ tiện nghi như: (Máy lạnh, tivi, giường nệm, tủ lạnh... ) thiết bị cao cấp mới mua đem lại sự tiện nghi và thoải mái trong căn phòng của bạn, ban chỉ việc xách quần áo đến và ở.\",\"Giá thuê chỉ từ 4.5 triệu - 7 triệu/tháng. \",\"Chúng tôi cam kết tuyệt đối với bạn rằng! Hình chụp như thế nào thì phòng của bạn như thế đó. Thậm chí có thể đẹp hơn trong thực tế nếu bạn tới xem trực tiếp.\",\"Liên hệ: A. Khang 0938297275 hoặc 0938. 111. 005\"]', '3048fde5-3dc2-45be-a6c9-4983d0e71d57', '30bb43de-31e3-4249-b194-c02ea24a78f3', '5e23d02c-736c-47be-9c61-6b8d4266fc54', '2023-02-24 09:21:57', '2023-02-24 09:21:57'),
('ceeef5f7-d194-459f-b41b-ebb896a38a25', 'Phòng 2 triệu tại q7, phòng mới, yên tĩnh, phòng riêng biệt, giờ giấc tự do', '3', 'YJL3', 'Địa chỉ: Phường Phú Mỹ, Quận 7, Hồ Chí Minh', '3709c870-0f4a-41c5-b57f-3bc6be3e2436', 'CTPT', '[\"Phòng trọ giá bình dân tại Q7\",\"▪︎ phòng 1tr6 không có gác ( có giường)\",\"▪︎ phòng 1tr9 có gác\",\"▪︎ phòng 2tr có gác, có ban công\",\"Địa chỉ: hẻm 77/49A đường chuyên dùng 9, phú mỹ q7, tphcm, ( gần siêu thị Coopmart)\",\"Phòng có vệ sinh và nấu ăn riêng biệt, không chung chủ\",\"phòng theo thiết kế cầu thang dễ đi, phòng nhỏ xinh, sạch sẽ, an ninh, phòng đã gắn 1 số thiết bị cần sử dụng như: gương, chỗ để bàn chài đánh răng, móc, có chỗ nấu ăn, kệ chén...\",\"điện 3/kg, nước 20khoi, rác 20k, wifi miễn phí, nhà xe có bảo vệ trông nom\",\"- Giờ giấc tự do\",\"- Điện thoại: 0909634270 Kim Cúc\",\"- Lưu ý: phòng chỗ mình k nuôi thú cưng, k kéo bạn bè về ăn nhậu hát hò.\",\"Cọc 1 tháng\"]', '5b243079-3b1e-47d4-82e7-d0b3cdb1873f', 'ab663246-82fb-4a8f-805b-d19af7513885', '544075ee-8631-49f1-b8fc-51267aeed0c2', '2023-02-24 09:21:57', '2023-02-24 09:21:57'),
('d322be8c-cec4-4edc-a876-22facc7a436d', 'PHÒNG SLEEP BOX FULL TIỆN NGHI DÀNH CHO CÁC BẠN SINH VIÊN BÌNH THẠNH, HUTECH, NGOẠI THƯƠNG, GTVT', '4', 'GOV2', 'Địa chỉ: 69/38/11 Đường D2, Phường 25, Quận Bình Thạnh, Hồ Chí Minh', 'cc837cd5-7c8c-40b5-ba0b-b9a1b72a779d', 'CTPT', '[\"Sleepbox đầy đủ tiện nghi riêng tư an ninh 24/24.\",\"KTX sleepbox cao cấp Nguyễn Gia Trí (D2 cũ) Bình Thạnh ngay Hutech.\",\"Xách vali vào ở ngay.\",\"Cách đại học Hutech 250m.\",\"Cách đại học Ngoại Thương 350m.\",\"Cách đại học GTVT 400m.\",\"Ưu đãi tháng đầu chỉ còn 1.400.000đ cho 10 bạn đăng kí sớm nhất\",\"Giá bình thường các tháng 1tr8/tháng/người (Bao chi phí điện nước, wifi, máy lạnh, nước uống, rác, ).\",\"Vị trí đẹp thuận lợi:\",\"- Ngay sau trường ĐH Hutech.\",\"- Khu vực đông dân cư.\",\"- Gần các trung tâm thương mại lớn.\",\"- View nhìn ra Landmark 81.\",\"- Thuận tiện di chuyển cầu SG, Xa Lộ HN, Q. 9, Phú Nhuận, Gò Vấp phòng * được trang bị sẵn đầy đủ tiện ích:\",\"- Giường riêng biệt, nệm cao su + drap.\",\"- Tủ quần áo, tủ đồ riêng.\",\"- Đèn học, ổ cắm điện.\",\"- WC riêng, sạch sẽ.\",\"- Khu vực bếp nấu ăn chung (Đầy đủ dụng cụ - lò vi sóng - bếp - xoong nồi... ).\",\"- Nước uống I - On miễn phí\",\"- Wifi siêu tốc.\",\"- Ra vào cửa vân tay.\",\"- Bảo vệ, quản lý 24/7.\",\"- Dọn vệ sinh trong phòng hằng ngày\",\"- Thang máy, máy giặt, nơi phơi đồ riêng.\",\"- Hệ thống camera an ninh.\",\"- Chỗ sinh hoạt luôn được vệ sinh sạch sẽ.\",\"Địa chỉ: CS1: 69/38/11 Nguyễn Gia Trí, P. 25, Bình Thạnh..\"]', 'c9b0f350-a81a-40e9-9420-4f3513d0cc40', '9d95eed7-99bc-4793-8c72-baa0de5594bb', 'e185a7bf-6c40-4a6b-b37a-6c20e90b2d65', '2023-02-24 09:21:57', '2023-02-24 09:21:57'),
('ef2583d3-3e89-4cdc-afa2-78b1109e81e2', 'Phòng sạch, đẹp 16m2, có sẵn nội thất chỉ từ 3,2 Triệu đến 3,5 Triệu/tháng tại Đinh Bộ Lĩnh, Phường 26, Bình Thạnh', '3', 'EYL7', 'Địa chỉ: Đường Đinh Bộ Lĩnh, Phường 26, Quận Bình Thạnh, Hồ Chí Minh', 'e1cb5392-6918-4dc2-b47c-549a4d2bbde5', 'CTPT', '[\"Cho thuê phòng trọ mới đẹp diện tích 16m2 tại hẻm 6m Đường Đinh Bộ Lĩnh, Phường 26, Quận Bình Thạnh\",\"Phòng gồm có wc riêng biệt sạch sẽ, sinh hoạt thuận tiện. Phòng có cửa sổ và thông gió mát mẽ, thoáng\",\"Có sẵn một số nội thất như: giường, tủ, máy quat, máy lạnh, máy năng lương,\",\"Miễn phí rác, bãi xe.\",\"Giờ giấc sinh hoạt tự do\",\"Khu an ninh, xung quanh có đầy đủ các tiện ích. Cách trung tâm chỉ 5 phút\",\"Giá thuê chỉ: 3.200.000đ/tháng đến 3.500.000đ/tháng\",\"Liên hệ xem phòng: 0903934756\"]', '86d9ecbf-20a9-4ff8-8daa-877197f3da31', '639d430b-af8a-4faf-bf02-c08992c0a803', '420c3e2c-438c-4234-b4b5-a988ca2818a9', '2023-02-24 09:21:57', '2023-02-24 09:21:57');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('create-attribute.js'),
('create-category.js'),
('create-image.js'),
('create-label.js'),
('create-overview.js'),
('create-post.js'),
('create-user.js');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `zalo` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `name`, `password`, `phone`, `zalo`, `createdAt`, `updatedAt`) VALUES
('06d0177f-9ac9-41f9-bc71-a19e6e0a96aa', 'Hoàng Phúc', '$2a$12$alClgI05OgInHwzm3W80ae1LhyDTIxnsdxhOIEoXKC1EEmvApDdBG', '0931313570', '0931313570', '2023-02-24 09:21:59', '2023-02-24 09:21:59'),
('074e1445-847f-4f14-a65c-119cbf30604d', 'Loan', '$2a$12$qx9kDesr3hcBYtkmZaKgU.BnhoAu.wmlEPRzM7XFGL9A0wxIRc9K.', '0978111919', '0978111919', '2023-02-24 09:22:02', '2023-02-24 09:22:02'),
('212d4883-519f-4d08-af38-2e2d440ba4cd', 'kenshin8522', '$2a$12$UXzKscZuOrwpCcmLYVlzLu5J8xYRoSGixLbTQ6GEVEEBoKcr08Hcu', '0906878018', '0906878018', '2023-02-24 09:22:00', '2023-02-24 09:22:00'),
('3048fde5-3dc2-45be-a6c9-4983d0e71d57', 'khang275 (*)', '$2a$12$AKOAhrpQNj1wtzH4W26reOS9fKt8Qy7eipCVYv/ynJC.flkGWlB1i', '0938297275', '0938297275', '2023-02-24 09:22:01', '2023-02-24 09:22:01'),
('3feff122-b6b2-4380-b5dc-f7da720ee62b', 'Bích Đào', '$2a$12$E57Xit1Q.gYsDCEOkQA8Tu3FvDa.jVOfMaSY0nSA/yOt5sMk/xTt.', '0935101516', '0935101516', '2023-02-24 09:21:59', '2023-02-24 09:21:59'),
('4733f3c8-9ebe-4a37-b5d7-5bd4b7e777fb', 'Hoàng Phúc', '$2a$12$kzcxcB1fuJ87z1jjdLHrv.4yBDts/vfYz3Jhs.cv8NxFf7AzPPm5W', '0931313570', '0931313570', '2023-02-24 09:22:00', '2023-02-24 09:22:00'),
('5b243079-3b1e-47d4-82e7-d0b3cdb1873f', 'Cao thi cuc', '$2a$12$Tlzd9fqmoS5A9xg.QihlVubv9KKAB0V6tWYlgbxVF85OGiex/8b9K', '0909634270', '0909634270', '2023-02-24 09:22:03', '2023-02-24 09:22:03'),
('86d9ecbf-20a9-4ff8-8daa-877197f3da31', 'Chị Đoan', '$2a$12$5Sj.0qkVPv0Hii1Q8crER.JjRlej/i1uDyJEWdpte9FVYvUFpUEu2', '0903934756', '0903934756', '2023-02-24 09:22:02', '2023-02-24 09:22:02'),
('89965207-d1b6-472e-8f2b-c49791a60cf2', 'ThuecanhominiQ7', '$2a$12$nunGfcZmno4g/yHmxGq7b..qLgCw/vGhlu8E7.lRzxdko9Pji9Phq', '0988373731', '0988373731', '2023-02-24 09:22:01', '2023-02-24 09:22:01'),
('8b2c8bf6-9296-45fe-8a72-3521cd48f05a', 'thuyngocnt78@gmail.com', '$2a$12$gHxlyV/tmyFFYsaSUyma1Odt3kgEApY6EOOg7KRSxeZGvkJ7wTAXC', '0907667248', '0907667248', '2023-02-24 09:22:03', '2023-02-24 09:22:03'),
('8c509711-57a1-49b6-8777-e6b0d5de693f', 'Văn Chung', '$2a$12$Ei0.uvMzp23DHRUjXTy0t.HPHQOtJLge14tcygl9PDe8j95EbJhQy', '0896119779', '0896119779', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('b4e28f40-e4f9-48db-843c-dfb76011c8a6', 'Mr Bình', '$2a$12$JOD03mItSqy/Mvqb4GxSKefYzFdpq1zNKEjpuxz048uxNoAm3EvJ2', '0936456678', '0936456678', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('c9b0f350-a81a-40e9-9420-4f3513d0cc40', 'Văn Chung', '$2a$12$UXRItR03UyBbm4/MUunXWeBbViRaUrPrAIRhtF/gZYQitm3e6B/pe', '0896119779', '0896119779', '2023-02-24 09:22:00', '2023-02-24 09:22:00'),
('d153377b-237c-4bf8-a9d3-3c14a82e26d0', 'Anh Cảnh', '$2a$12$7bbzhxwyLqvU/amfQXt0JepdfbywavyApnLnTrkqMemOAbLneHKA2', '0913635257', '0913635257', '2023-02-24 09:22:02', '2023-02-24 09:22:02'),
('db110d00-51ef-43a8-98e2-c48da9431b42', 'huỳnh thị mỹ trâm', '$2a$12$QH.ECON6T8T8ACviJDh6EeTeHSKB1/NBU10jLKoudvrQ7Y64FI7X.', '0916668326', '0916668326', '2023-02-24 09:22:00', '2023-02-24 09:22:00'),
('f70c46fc-92fc-4f44-9a26-c06719cd2cd9', 'Văn Chung', '$2a$12$Hk4rgdtSrlGtgc5skyNvY.36X7W3uCIGIR8gA57okXOozomMv6lim', '0896119779', '0896119779', '2023-02-24 09:22:01', '2023-02-24 09:22:01'),
('f963a385-b7a6-4423-a02f-d684dae4acfd', 'van528', '$2a$12$/JCp7rFjBTgz2lb.fKc9RuCkh2rHVmwGXQi/zfx/vC0uOL0jTI/uC', '0919990528', '0919990528', '2023-02-24 09:22:02', '2023-02-24 09:22:02'),
('f979f9ff-51d0-4b95-a14f-500eed849fb5', 'Nguyen Thi Bich Thuy', '$2a$12$hXC8RUmfyhNKusEvTMF.YOJtJLix/eWLfmxMTbnL2FbrqQHNVeEZG', '0983344682', '0983344682', '2023-02-24 09:22:01', '2023-02-24 09:22:01'),
('faba432f-d42e-4067-a395-fd3b638d4694', 'VINH NGUYỄN', '$2a$12$qRQSXP6V5k1cQGTV0mhWGuoVgDoWt1o15UbkIcjOuZCE1g8550bZG', '0938662616', '0938662616', '2023-02-24 09:21:58', '2023-02-24 09:21:58'),
('fdd70489-53d0-4a0e-ae48-6cd8228061bf', 'Nguyễn Phạm Đức Cường', '$2a$12$Vmp41QivRWx/FKPmvBxLI.msXPHSEgkd3Na0BoPaCIYQiAf4/alie', '0938864405', '0938864405', '2023-02-24 09:21:59', '2023-02-24 09:21:59');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `attributes`
--
ALTER TABLE `attributes`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `labels`
--
ALTER TABLE `labels`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `overviews`
--
ALTER TABLE `overviews`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `labels`
--
ALTER TABLE `labels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
