import ContainerContent from "../../components/common/ContainerContent";
import Support from "../../components/home/Support";

import { css } from "@emotion/react";
import IconButton from "@mui/material/IconButton";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MeetingRoomOutlinedIcon from "@mui/icons-material/MeetingRoomOutlined";
import CachedIcon from "@mui/icons-material/Cached";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";

import Button from "@mui/material/Button";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import { Select, MenuItem } from "@mui/material";
import { getUIList } from "../../api/listing";

import { ListingSaleTypes } from "../../utils/constant";
import { ListingRentTypes } from "../../utils/constant";
import { SelectNumbers } from "../../utils/constant";
import { DefaultSortTypes } from "../../utils/constant";

import ListingBox from "../../components/common/ListingBox";
ListingSearch.propTypes = {};

// function ItemSearch(props) {
//   const { item } = props;
//   return (
//     <div
//       css={css`
//         max-width: 324px;
//         height: 328px;
//       `}
//     >
//       <div
//         css={css`
//           width: 100%;
//           height: 180px;
//         `}
//       >
//         <img
//           css={css`
//             width: 100%;
//             height: auto;
//             object-fit: cover;
//           `}
//           src={getImageUrl(item.avatarUrl)}
//           alt=""
//         />
//       </div>
//       <div
//         css={css`
//           margin: 19px 0;
//         `}
//       >
//         <div
//           css={css`
//             display: flex;
//             justify-content: space-between;
//           `}
//         >
//           <span>{item.price}</span>
//           <span>{item.name}</span>
//         </div>
//         <p>{item.address}</p>
//         <span>{item.address}</span>
//         <div
//           css={css`
//             display: flex;
//           `}
//         >
//           <div
//             css={css`
//               display: flex;
//             `}
//           >
//             <IconButton>
//               <CachedIcon />
//             </IconButton>
//             <span>
//               11.{} m<sup>2</sup>
//             </span>
//           </div>
//           <div>
//             <IconButton>
//               <CachedIcon />
//             </IconButton>
//             <span>3</span>
//           </div>
//           <div>
//             <IconButton>
//               <CachedIcon />
//             </IconButton>
//             <span>3</span>
//           </div>
//           <div>
//             <IconButton>
//               <CachedIcon />
//             </IconButton>
//             <span>Tây nam</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

function ListingSearch() {
  let [searchParams] = useSearchParams(); // doc từ url xuống
  const keyword = searchParams.get("filterKeyword");
  const [page, setPage] = useState(1);
  const [provinceId, setProvinceId] = useState(null);
  const [saleType, setSaleType] = useState(null);
  const [buyTypes, setBuyTypes] = useState(null);
  const [numberRooms, setNumberRooms] = useState(null);
  const [districtId, setDistrictId] = useState(null);
  const [wardId, setWardId] = useState(null);
  const [listingType, setListingType] = useState(null);
  const [direction, setDirection] = useState(null);
  const [bedroomCount, setBedroomCount] = useState(null);
  const [toiletCount, setToiletCount] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [minAreaSquare, setMinAreaSquare] = useState(null);
  const [maxAreaSquare, setMNaxAreaSquare] = useState(null);
  const [filterKeyword, setFilterKeyword] = useState(keyword);
  const [totalCount, setTotalCount] = useState(0);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const rowsPerPage = 30;

  console.log("search", search);

  const handleSearch = () => {
    // navigate(`/tin-tuc/tim-kiem?filterKeyword=${search}`);
    navigate(`/tim-kiem-tin-dang?filterKeyword=${search}`);
  };

  const keyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  };
  const top100Films = [
    { label: "Mới nhất" },
    { label: "Giá giảm dần" },
    { label: "Giá tăng dần" },
    { label: "Diện tích tăng dần" },
    { label: "diện tích giảm dần" },
  ];

  const callAPI = async () => {
    const params = {
      saleType: saleType,
      provinceId: provinceId,
      districtId: districtId,
      wardId: wardId,
      listingType: listingType,
      direction: direction,
      bedroomCount: bedroomCount,
      toiletCount: toiletCount,
      minPrice: minPrice,
      maxPrice: maxPrice,
      minAreaSquare: minAreaSquare,
      maxAreaSquare: maxAreaSquare,
      filterKeyword: filterKeyword,
      page: page,
      rowsPerPage: rowsPerPage,
    };

    try {
      const result = await getUIList(params);
      console.log(result);

      console.log("dddddd", result);
      setData(result.data.result.items);
    } catch (error) {
      console.log(error);
    }
  };

  //   const handleChange = (event, currentPage) => {
  //     setPage(currentPage);
  //     try {
  //       getUIPostList(null, page, rowsPerPage, filterKeyword, tag).then(
  //         (resp) => {
  //           //cách 1: set lại state và dùng lại data cũ
  //           // setData(prev=>(
  //           //   {
  //           //     ...prev,
  //           //     newsList:resp.data.result
  //           //   }
  //           // ));

  //           //cách 2: set lại state và dùng lại data cũ
  //           const object = { ...data, newsList: resp.data.result };
  //           setData(object);
  //         }
  //       );
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  useEffect(() => {
    callAPI();
  }, []);

  return (
    <>
      <div>
        {filterKeyword}
        <div
          css={css`
            display: flex;
            justify-content: center;
          `}
        >
          <div
            css={css`
              background: #440656;
              width: 40px;
              height: 40px;
              color: white;
              display: flex;
              justify-content: center;
              align-items: center;
              margin: 0 20px;
            `}
          >
            <svg
              width="16px"
              height="16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=""
            >
              <g
                clipPath="url(#clip0)"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2.667 14V9.333M2.667 6.667V2M8 14V8M8 5.333V2M13.333 14v-3.333M13.333 8V2M.667 9.333h4M6 5.333h4M11.333 10.667h4"></path>
              </g>
              <defs>
                <clipPath id="clip0">
                  <path fill="#fff" d="M0 0h16v16H0z"></path>
                </clipPath>
              </defs>
            </svg>
          </div>

          <div
            css={css`
              display: inline-flex;

              width: 440px;
              height: 40px;
              position: relative;
            `}
          >
            <input
              css={css`
                width: 100%;
                height: 40px;
                background: #f6f6f6;
                border-radius: 4px;
                border: none;
                outline: none;
                padding: 9px;
                &::placeholder {
                  color: #757575;
                  opacity: 0.6;
                }
              `}
              type="text"
              placeholder="Nhập từ khóa bạn cần tìm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(even) => keyDown(even)}
            />
            <IconButton
              css={css`
                position: absolute;
                top: 0;
                right: 0;
              `}
              onClick={() => handleSearch()}
            >
              <SearchOutlinedIcon
                css={css`
                  color: red;
                `}
              />
            </IconButton>
          </div>
          <div
            css={css`
              display: inline-flex;
              width: 174px;
              height: 40px;
              position: relative;
              margin: 0 20px;
            `}
          >
            <Select
              id="demo-simple-select"
              value={saleType}
              css={css`
                width: 100%;
                height: 40px;
                /* background: #f6f6f6; */
                border-radius: 4px;
                padding: 9px;
                padding-left: 32px;
              `}
              onChange={(e) => {
                setSaleType(e.target.value);
              }}
            >
              {Object.values(ListingSaleTypes).map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
            <div
              css={css`
                position: absolute;
                top: 0;
                left: 0;
              `}
            >
              <IconButton>
                <MeetingRoomOutlinedIcon />
              </IconButton>
            </div>
          </div>
          <div
            css={css`
              display: inline-flex;

              width: 174px;
              height: 40px;
              position: relative;
              margin: 0 20px;
            `}
          >
            <Select
              label="Loại BĐS"
              id="demo-simple-select"
              value={buyTypes}
              css={css`
                width: 100%;
                height: 40px;
                /* background: #f6f6f6; */
                border-radius: 4px;
                padding: 9px;
                padding-left: 32px;
              `}
              onChange={(e) => {
                setBuyTypes(e.target.value);
              }}
            >
              {Object.values(ListingRentTypes).map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
            <div
              css={css`
                position: absolute;
                top: 0;
                left: 0;
              `}
            >
              <IconButton>
                <MeetingRoomOutlinedIcon />
              </IconButton>
            </div>
          </div>
          <div
            css={css`
              display: inline-flex;

              width: 174px;
              height: 40px;
              position: relative;
              margin: 0 20px;
            `}
          >
            <input
              css={css`
                width: 100%;
                height: 40px;
                background: #f6f6f6;
                border-radius: 4px;
                border: none;
                outline: none;
                padding: 9px;
                padding-left: 32px;
                &::placeholder {
                  color: #757575;
                  opacity: 0.6;
                }
              `}
              type="text"
              placeholder="khoảng giá"
            />
            <IconButton
              css={css`
                position: absolute;
                top: 0;
                left: 0;
              `}
            >
              <AttachMoneyOutlinedIcon
                css={css`
                  color: #757575;
                `}
              />
            </IconButton>
          </div>
          <div
            css={css`
              display: inline-flex;

              width: 174px;
              height: 40px;
              position: relative;
              margin: 0 20px;
            `}
          >
            <input
              css={css`
                width: 100%;
                height: 40px;
                background: white;
                border-radius: 4px;

                padding: 9px;
                padding-left: 32px;
                border: 1px solid #eeeeee;
                &::placeholder {
                  color: #757575;
                  opacity: 0.6;
                }
              `}
              type="text"
              placeholder="Diện tích"
            />
            <IconButton
              css={css`
                position: absolute;
                top: 0;
                left: 0;
              `}
            >
              <AspectRatioIcon
                css={css`
                  color: #757575;
                `}
              />
            </IconButton>
          </div>
          <div
            css={css`
              display: inline-flex;

              width: 174px;
              height: 40px;
              position: relative;
              margin: 0 20px;
            `}
          >
            <Select
              label="Loại BĐS"
              id="demo-simple-select"
              value={numberRooms}
              css={css`
                width: 100%;
                height: 40px;
                /* background: #f6f6f6; */
                border-radius: 4px;
                padding: 9px;
                padding-left: 32px;
              `}
              onChange={(e) => {
                setNumberRooms(e.target.value);
              }}
            >
              {SelectNumbers.map((item, index) => (
                <MenuItem key={index} value={item.value}>
                  {item.text}
                </MenuItem>
              ))}
            </Select>
            <IconButton
              css={css`
                position: absolute;
                top: 0;
                left: 0;
              `}
            >
              <MeetingRoomOutlinedIcon
                css={css`
                  color: #757575;
                `}
              />
            </IconButton>
          </div>

          <div
            css={css`
              display: inline-flex;

              width: 174px;
              height: 40px;
              position: relative;
              margin: 0 20px;
            `}
          >
            <input
              css={css`
                width: 100%;
                height: 40px;
                background: #f6f6f6;
                border-radius: 4px;
                border: none;
                outline: none;
                padding: 9px;
                padding-left: 32px;

                &::placeholder {
                  color: #757575;
                  opacity: 0.6;
                }
              `}
              type="text"
              placeholder="Nâng cao"
            />
            <div
              css={css`
                position: absolute;
                top: 0;
                left: 160px;
              `}
            >
              <IconButton>
                <svg
                  width="16px"
                  height="16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                  css={css`
                    color: #757575;
                    position: absolute;
                    left: -150px;
                    top: 8px;
                  `}
                >
                  <g
                    clipPath="url(#clip0)"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2.667 14V9.333M2.667 6.667V2M8 14V8M8 5.333V2M13.333 14v-3.333M13.333 8V2M.667 9.333h4M6 5.333h4M11.333 10.667h4"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <path fill="#fff" d="M0 0h16v16H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </IconButton>
            </div>
          </div>

          <div
            css={css`
              width: 40px;
              height: 40px;
              border-radius: 4px;
              border: 1px solid #757575;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-right: 20px;
            `}
          >
            <IconButton>
              <CachedIcon />
            </IconButton>
          </div>
          <div>
            <Button
              css={css`
                min-width: 140px;
                height: 40px;
                cursor: pointer;
                color: white;
                font-family: "SFU Eurostile";
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 20px;
              `}
              variant="contained"
              color="secondary"
              onClick={() => callAPI()}
            >
              Tìm kiếm
            </Button>
          </div>
        </div>
        <ContainerContent>
          <div
            css={css`
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-top: 40px;
              margin-bottom: 40px;
            `}
          >
            <span
              css={css`
                color: orange;
              `}
            >
              Có 2 bất động sản được tìm thấy
            </span>
            <div
              css={css`
                width: 225px;
                height: 40px;
              `}
            >
              <Select
                label="Loại BĐS"
                id="demo-simple-select"
                value={listingType}
                css={css`
                  width: 100%;
                  height: 40px;
                  /* background: #f6f6f6; */
                  border-radius: 4px;
                  padding: 9px;
                  padding-left: 32px;
                `}
                onChange={(e) => {
                  setListingType(e.target.value);
                }}
              >
                {DefaultSortTypes.map((item, index) => (
                  <MenuItem key={index} value={item.value}>
                    {item.text}
                  </MenuItem>
                ))}
              </Select>
            </div>
          </div>
          <section
            css={css`
              display: flex;
              gap: 20px;
            `}
          >
            {data &&
              data.map((item, index) => (
                <div key={index}>
                  <ListingBox key={item.id} item={item} />
                </div>
              ))}
          </section>
        </ContainerContent>
        <Support />
      </div>
    </>
  );
}

export default ListingSearch;
