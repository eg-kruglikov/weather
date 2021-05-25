import { Line } from 'react-chartjs-2'
import { useWetherContext } from '../../contexts/wetherContext'

function Header() {
    console.log('render Header');

    const { weth } = useWetherContext()

    return (
        <div className="mx-4">
            {
                weth[0] ?
                    <>
                        <h1 className="mx-4">{weth[0].city.name}</h1>




                    </>
                    : <a>пусто</a>
            }



        </div>
    )
}


export default Header