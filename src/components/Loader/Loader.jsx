import style from './style.module.css'


function Loader() {
    return (
        <div className="d-flex justify-content-center" style={{marginTop: 230}}>
            <div className={style.ldsripple}><div></div><div></div></div>
        </div>
    )
}

export default Loader