export default function RedirectComponent({isRedirect}) {
    return (<>
        {!isRedirect && <button role="button" name="Redirect">Click for Redirect</button>}
        {isRedirect && <div>Redirected Page</div>}
    </>)
}