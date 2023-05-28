import { useParams, useSearchParams } from "react-router-dom";

const ListingPage = () => {
  let { listingId } = useParams(); // /listing/:id => /listing/123 => listingId =123
  let [searchParams] = useSearchParams(); // /listing/123?filterKeyword=bbbb=> searchParams = filterKeyword=bbbb

  return (
    <div>
      Đây là trang listing {listingId} {searchParams}
    </div>
  );
};

export default ListingPage;
