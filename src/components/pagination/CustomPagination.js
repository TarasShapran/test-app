import {Pagination} from '@material-ui/lab';

export default function CustomPagination({ setPage}) {

    const hanglePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0)
    };


    return (
        <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            marginTop: 10
        }
        }>
            <Pagination count={10}
                        onChange={(e) => hanglePageChange(e.target.textContent)}
                        hideNextButton
                        hidePrevButton
            />

        </div>
    );
}