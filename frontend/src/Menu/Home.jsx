import { About } from './About'
import { Services } from './Services'
import { Contuct } from './Contuct'
export const Home = () => {
    return (
        <div className="container  " style={{ marginTop: "100px" }}>
            <div>
                <div className="row text-center">
                    <div className="col-6">
                        <h1>qoral</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nam doloremque perferendis deleniti temporibus minima corrupti illo numquam amet fuga.</p>
                        <button className='btn btn-secondary mt-3 m-3'>Read More</button>
                    </div>
                    <div className="col-6">
                        <h1>image</h1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, laudantium?
                    </div>
                </div>
            </div>
            <div >
                <About />
            </div>
            <div>
                <Services />
            </div>
            <div>
                <Contuct />
            </div>
        </div>
    )
}