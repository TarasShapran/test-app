import {Pagination} from "@material-ui/lab";

export default function CustomPagination({numOfPage=10,setPage}) {

  const hanglePageChange=(page)=>{
    setPage(page);
    window.scroll(0,0)
  };


  let numbOfPage;
  return (
    <div>
    <Pagination count={numOfPage} onChang={(e)=>hanglePageChange(e.target.textContent)}/>

    </div>
  );
}