- thunk: Xu li bat dong bo giua redux va react
- react-router-dom: tao route cho app
- useLocation: Lay thong tin tu URL hien tai(NHận đata từ component khác))
- useCallback: giong useMemo nhung khac mot chut
- useReducer: phien ban nang cao cua useState
- useSelector: Lấy data từ store reducer ra
- useRef: truy cập dom của các tag. bên cạnh đó còn giúp lưu trữ một biến mutate(đột biến)

- flow redux:

  - Page login.js: truyen prop value, setValue va type -> component InputForm
  - Component InputForm: bat event onChange de update (setValue) theo type
  - Page login.js: Sau khi value (payload) da duoc update, click button 'Dang ky' de goi ham handleSubmit Trong page login.js> Trong login.js, Ham handleSubmit se dispatch (gui di) mot action register kem theo payload
  - action/auth.js: ham register dc khoi chay vs payload va dispatch truyen vao.Tiep theo, goi apiRegister => response, Check response.data.err === 0 (success) => dispatch(gui di) mot action co type va data qua reducers/authReducer.js
  - authReducer.js: Hàm nhận vào state = state khởi tạo và action từ bên action/auth.js gửi qua => (state = initState, action).Nếu action.type match với 'REGISTER_SUCCESS' => trả về state khởi tạo trước đó và cập nhật lại state gồm có isLoggedIn, token: action.data(từ bên kia gửi qua)...

- export default: chỉ là phép export một mặc định cho mỗi file. Có thể là một function, một class, hoặc một object. Việc đặt tên import hoàn toàn độc lập trong export default-> ta có thể sử dụng tên bất kì.
