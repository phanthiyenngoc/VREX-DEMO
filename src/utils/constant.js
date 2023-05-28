export const AccountType = {
  Administrator: 0,
  Personal: 10,
};

export const NotificationState = {
  Unread: 0,
  Read: 1,
};

export const GenderTypes = [
  {
    label: "Nam",
    value: "M",
  },
  {
    label: "Nữ",
    value: "F",
  },
  {
    label: "Khác",
    value: "O",
  },
];

export const PeriodTypes = [
  {
    value: 0,
    text: "7 ngày",
  },
  {
    value: 10,
    text: "30 ngày",
  },
  {
    value: 20,
    text: "1 năm",
  },
  {
    value: 30,
    text: "Tất cả",
  },
];
export const ListingSortTypes = [
  {
    value: "recent",
    text: "Mới nhất",
  },
  {
    value: "price_desc",
    text: "Giá giảm dần",
  },
  {
    value: "price_asc",
    text: "Giá tăng dần",
  },
  {
    value: "area_asc",
    text: "Diện tích tăng dần",
  },
  {
    value: "area_desc",
    text: "Diện tích giảm dần",
  },
];
export const DefaultSortTypes = [
  {
    value: "recent",
    text: "Mới nhất",
  },
  {
    value: "price_desc",
    text: "Giá cao nhất",
  },
  {
    value: "price_asc",
    text: "Giá thấp nhất",
  },
];

export const ProjectStatuses = {
  ComingUp: "Sắp mở bán",
  OnSale: "Đang bán",
  Sold: "Đã bán",
};

export const AccountLevel = {
  Host: 0,
  Agency: 10,
};

export const ApproveStatus = {
  Approved: "Đã duyệt",
  Rejected: "Đã từ chối",
  Draft: "Lưu nháp",
  WaitingForApprove: "Chờ duyệt",
};

export const PostTypes = {
  News: 0,
  Topic: 10,
};

export const ListingSort = {
  Hot: "hot",
  New: "New",
};

export const BuyTypes = {
  Apartment: "Căn hộ chung cư",
  Penthouse: "Căn hộ penthouse",
  Officetel: "Căn hộ officetel",
  Home: "Nhà riêng",
  Villa: "Nhà biệt thự",
  FrontHouse: "Nhà mặt tiền",
  ProjectLand: "Đất nền dự án",
  ResidentialLand: "Đất thổ cư",
  AgriculturalOrForestryLand: "Đất nông/lâm nghiệp",
  WarehouseOrYardOrWorkshop: "Kho/bãi/xưởng",
};

export const ListingRentTypes = {
  Apartment: "Căn hộ chung cư",
  Penthouse: "Căn hộ penthouse",
  Officetel: "Căn hộ officetel",
  Home: "Nhà riêng",
  Villa: "Nhà biệt thự",
  FrontHouse: "Nhà mặt tiền",
  MotelRoom: "Phòng trọ",
  Office: "Văn phòng",
  Ground: "Mặt bằng",
  LandAndWarehouseOrWorkshop: "Đất và kho/xưởng",
};

export const ListingLeaseTypes = {
  Eatery: "Quán ăn",
  RestaurantsOPubs: "Nhà hàng - quán nhậu",
  CafeOrDrinkOrSnacks: "Cafe - Đồ uống - Ăn vặt",
  SpaOrHairSalonOrNails: "Tiệm tóc - Nails",
  ShopOrKiosk: "Sạp - Ki-ốt",
  BilliardsOrGameNet: "Bi-da - Game net",
  SpaOrGym: "Spa - Gym",
  OtherType: "Các loại Khác",
};

export const AllListingType = {
  ...BuyTypes,
  ...ListingRentTypes,
  ...ListingLeaseTypes,
};

export const ListingSaleTypes = {
  Sell: "Bán",
  Rent: "Cho thuê",
  Transfer: "Sang nhượng",
};

export const BrokerSaleTypes = {
  FindBuy: "Tìm mua",
  FindRent: "Tìm thuê",
  FindTransfer: "Tìm sang nhượng",
};

export const AllSaleType = {
  ...ListingSaleTypes,
  ...BrokerSaleTypes,
};

export const Legals = ["Hợp đồng", "Sổ hồng", "Giấy tay", "Giấy tờ hợp lệ"];

export const UtilitiesListings = [
  {
    GroupType: "apartment",
    GroupItems: ["Căn hộ chung cư", "Căn hộ penthouse", "Căn hộ officetel"],
    PropNames: [
      "areaSquare",
      "bedroomCount",
      "toiletCount",
      "direction",
      "houseStatus",
      "legal",
      "projectId",
      "block",
      "balconyNumber",
    ],
    PropNamesInHeader: ["bedroomCount"],
  },
  {
    GroupType: "home",
    GroupItems: ["Nhà biệt thự", "Nhà mặt tiền", "Nhà riêng"],
    PropNames: [
      "bedroomCount",
      "areaSquare",
      "direction",
      "length",
      "width",
      "legal",
      "toiletCount",
      "projectId",
      "garden",
      "poolNumber",
      "usableArea",
      "roadSurface",
      "worldHighway",
    ],
    PropNamesInHeader: ["bedroomCount"],
  },
  {
    GroupType: "theGroundWarehouse",
    GroupItems: [
      "Đất nền dự án",
      "Đất nông/lâm nghiệp",
      "Đất thổ cư",
      "Kho/bãi/xưởng",
      "Đất và kho/xưởng",
    ],
    PropNames: [
      "areaSquare",
      "length",
      "width",
      "direction",
      "legal",
      "roadSurface",
      "worldHighway",
      "streetType",
    ],
    PropNamesInHeader: ["direction"],
  },
  {
    GroupType: "office",
    GroupItems: ["Văn phòng"],
    PropNames: [
      "areaSquare",
      "direction",
      "length",
      "width",
      "building",
      "numberOfFloors",
    ],
    PropNamesInHeader: ["direction"],
  },
  {
    GroupType: "motel",
    GroupItems: ["Phòng trọ"],
    PropNames: [
      "isSharedToilet",
      "areaSquare",
      "rentHourType",
      "rentStayingType",
      "balconyNumber",
      "windowNumber",
      "airConditionerNumber",
      "houseStatus",
    ],
    PropNamesInHeader: ["rentHourType"],
  },
  {
    GroupType: "ground",
    GroupItems: ["Mặt bằng"],
    PropNames: [
      "areaSquare",
      "direction",
      "roadSurface",
      "length",
      "width",
      "legal",
      "bedroomCount",
      "toiletCount",
      "projectId",
      "usableArea",
      "worldHighway",
    ],
    PropNamesInHeader: ["direction"],
  },
  {
    GroupType: "transfer",
    GroupItems: [
      "Quán ăn",
      "Nhà hàng - quán nhậu",
      "Cafe - Đồ uống - Ăn vặt",
      "Tiệm tóc - Nails",
      "Bi-da - Game net",
      "Spa - Gym",
      "Sạp - Ki-ốt",
      "Các loại Khác",
    ],
    PropNames: [
      "roadSurface",
      "areaSquare",
      "usableArea",
      "length",
      "width",
      "direction",
      "bedroomCount",
      "legal",
    ],
    PropNamesInHeader: ["direction"],
  },
];

export const ContactTypes = {
  PostListing: 0,
  ProjectSupport: 10,
  Contact: 20,
};

export const Direction = {
  North: "Bắc",
  Northeast: "Đ.Bắc",
  East: "Đông",
  SouthEast: "Đ.Nam",
  South: "Nam",
  Southwest: "T.Nam",
  West: "Tây",
  Northwest: "T.Bắc",
};

export const HouseStatus = {
  FullFurniture: "Đầy đủ nội thất",
  BasicFurniture: "Nội thất cơ bản",
  RawHouse: "Nhà thô",
};

export const RentStayingType = {
  Free: "Độc lập",
  SharedOwner: "Chung chủ",
  RoomSharing: "Share phòng",
};

export const StreetType = {
  MotorcycleRoad: "Đường xe máy",
  Highways: "Đường ô tô",
  ContainerRoad: "Đường xe Container",
};

export const FacilityTypes = {
  School: "Trường học",
  Restaurant: "Nhà hàng",
  SuperMarket: "Siêu thị",
  Medical: "Y tế",
  Bank: "Ngân hàng",
  Administrative: "Hành chính",
};

export const NumberRooms = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5+",
};

export const SelectNumbers = [
  {
    text: "1",
    value: 1,
  },
  {
    text: "2",
    value: 2,
  },
  {
    text: "3",
    value: 3,
  },
  {
    text: "4",
    value: 4,
  },
  {
    text: "5+",
    value: 5,
  },
];

export const SearchTypes = {
  Project: "Project",
  Listing: "Listing",
};

export const ChatMessageReadState = {
  Unread: 1,
  Read: 2,
};
