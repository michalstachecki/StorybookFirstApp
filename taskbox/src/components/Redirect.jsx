export default function RedirectComponent({isRedirect, index}) {
    const onRedirectClick = ($event, index) => {
        $event.preventDefault();
        alert(index);
    } 

    return (<>
        {!isRedirect && 
        <div>
            <button role="button" name="Redirect" onClick={($event) => onRedirectClick($event, 1)}>Click for Redirect to page 1</button>
            <br/>
            <button role="button" name="Redirect2" onClick={($event) => onRedirectClick($event, 2)}>Click for Redirect to page 2</button>
        </div>
        }
        {isRedirect && <div>Redirected Page {index}</div>}
    </>)
}