import { Banner_Total, Form_local, Image_local } from "./style";
import Form from "../Form_Banner";

const Banner = () =>{
    return(
      <Banner_Total>
        <Form_local>
          <Form/>
        </Form_local>
        <Image_local>
          <img src="/image_banner.png" alt="" />
        </Image_local>
       
      </Banner_Total>
    )
}

export default Banner