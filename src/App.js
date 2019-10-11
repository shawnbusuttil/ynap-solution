import React, { Component, Fragment } from 'react';

import ParallaxImage from "./components/parallax-image/ParallaxImage";
import StickyColumn from './components/sticky/StickyColumn';

import "./App.scss";

class App extends Component {
  state = { width: 0 };

  updateDimensions = () => {
    this.setState({ width: window ? window.innerWidth : 800 });
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  render() {
    const loremIpsum = <div className="main">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor id aliquet lectus proin nibh. Sed nisi lacus sed viverra tellus in hac. Molestie nunc non blandit massa enim nec. Nulla at volutpat diam ut venenatis tellus in. Consequat id porta nibh venenatis cras sed. Sit amet dictum sit amet justo donec enim diam. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Sed velit dignissim sodales ut eu sem integer. Sed risus pretium quam vulputate dignissim.
  
    Quis hendrerit dolor magna eget est lorem. Egestas quis ipsum suspendisse ultrices gravida. Amet luctus venenatis lectus magna fringilla urna porttitor. Bibendum enim facilisis gravida neque. Aliquam faucibus purus in massa tempor nec feugiat. Mauris augue neque gravida in fermentum et sollicitudin ac orci. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Lacus luctus accumsan tortor posuere ac ut consequat. Purus gravida quis blandit turpis. Suscipit adipiscing bibendum est ultricies. Felis eget nunc lobortis mattis. Mi proin sed libero enim sed faucibus turpis in eu. Duis ultricies lacus sed turpis tincidunt id aliquet. Cursus euismod quis viverra nibh cras pulvinar mattis. Et leo duis ut diam. Tellus pellentesque eu tincidunt tortor. Pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies.
    
    Faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Vitae elementum curabitur vitae nunc sed. Tempor id eu nisl nunc mi ipsum. Adipiscing at in tellus integer feugiat scelerisque varius. Aliquam id diam maecenas ultricies mi eget. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Sollicitudin tempor id eu nisl. Cursus metus aliquam eleifend mi in nulla posuere. Duis tristique sollicitudin nibh sit amet. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Pharetra vel turpis nunc eget lorem dolor sed. Nullam eget felis eget nunc lobortis.
    
    Id porta nibh venenatis cras sed felis eget velit. Vel pharetra vel turpis nunc. Commodo elit at imperdiet dui accumsan sit amet. Sit amet consectetur adipiscing elit duis. Ultricies leo integer malesuada nunc vel risus commodo viverra. Non tellus orci ac auctor augue mauris augue neque gravida. Placerat in egestas erat imperdiet sed euismod nisi. Quam viverra orci sagittis eu volutpat odio facilisis mauris sit. Dolor magna eget est lorem ipsum dolor sit amet. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean.
    
    Amet venenatis urna cursus eget nunc scelerisque. Amet commodo nulla facilisi nullam vehicula ipsum. In hac habitasse platea dictumst vestibulum rhoncus est. Habitant morbi tristique senectus et netus. Aliquet risus feugiat in ante metus dictum at tempor. Sit amet justo donec enim diam vulputate ut pharetra. Amet porttitor eget dolor morbi non arcu risus quis. Eu sem integer vitae justo. Consequat id porta nibh venenatis cras sed felis eget. Eget velit aliquet sagittis id consectetur purus ut faucibus. Consectetur a erat nam at lectus urna. At imperdiet dui accumsan sit amet nulla facilisi morbi. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Pellentesque eu tincidunt tortor aliquam nulla.
    
    Id eu nisl nunc mi ipsum faucibus. Nibh tellus molestie nunc non blandit massa enim nec. Amet aliquam id diam maecenas ultricies mi eget mauris pharetra. Est sit amet facilisis magna. Nullam eget felis eget nunc lobortis mattis aliquam faucibus purus. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Cursus metus aliquam eleifend mi in nulla posuere. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Justo eget magna fermentum iaculis eu non. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Aenean sed adipiscing diam donec adipiscing. Ultrices neque ornare aenean euismod. Sit amet mattis vulputate enim nulla aliquet porttitor. Eu sem integer vitae justo eget magna fermentum iaculis eu.
    
    Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Ipsum suspendisse ultrices gravida dictum fusce ut. Gravida neque convallis a cras semper auctor neque vitae tempus. Ut consequat semper viverra nam. Malesuada fames ac turpis egestas integer eget aliquet. Nullam eget felis eget nunc. Dolor purus non enim praesent. Sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis. Eget mi proin sed libero enim sed faucibus turpis in. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus.
    
    Sit amet venenatis urna cursus eget. Dolor morbi non arcu risus. Et odio pellentesque diam volutpat commodo sed egestas egestas. Id porta nibh venenatis cras sed. Lacus suspendisse faucibus interdum posuere lorem ipsum. Interdum varius sit amet mattis vulputate enim nulla aliquet. Mauris augue neque gravida in fermentum et sollicitudin ac. Duis at tellus at urna condimentum. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Purus in mollis nunc sed id. In iaculis nunc sed augue lacus viverra. Sit amet purus gravida quis blandit. Eros donec ac odio tempor orci dapibus. Facilisi nullam vehicula ipsum a arcu cursus vitae. Adipiscing commodo elit at imperdiet. Dictum at tempor commodo ullamcorper a lacus. Quam pellentesque nec nam aliquam sem et. Augue eget arcu dictum varius duis at consectetur lorem donec.
    
    Nulla facilisi nullam vehicula ipsum a. Sit amet purus gravida quis blandit turpis. Posuere morbi leo urna molestie at elementum eu facilisis sed. Lectus arcu bibendum at varius vel pharetra vel. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Tellus orci ac auctor augue mauris augue neque gravida in. Amet mauris commodo quis imperdiet massa tincidunt. Amet mattis vulputate enim nulla aliquet porttitor lacus. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Risus in hendrerit gravida rutrum. Volutpat lacus laoreet non curabitur gravida arcu. Magna fermentum iaculis eu non diam phasellus. Dolor sit amet consectetur adipiscing elit pellentesque. Dui accumsan sit amet nulla facilisi. Pharetra et ultrices neque ornare aenean. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Diam sollicitudin tempor id eu nisl nunc mi ipsum. In vitae turpis massa sed elementum tempus.
    
    Iaculis eu non diam phasellus vestibulum lorem sed risus. Egestas tellus rutrum tellus pellentesque. Nec feugiat in fermentum posuere urna nec tincidunt. Cursus eget nunc scelerisque viverra mauris in aliquam. Sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Ultrices eros in cursus turpis massa tincidunt dui ut ornare. Nibh mauris cursus mattis molestie a iaculis at. Pharetra pharetra massa massa ultricies. Sed enim ut sem viverra aliquet. Tincidunt eget nullam non nisi est sit. Aliquam faucibus purus in massa tempor nec.</div>
    const imgContent = <img src="images/w950_column_image.jpeg" alt="ynap" />;

    const view = this.state.width <= 800 ? imgContent : <StickyColumn>{imgContent}</StickyColumn>
    
    return <Fragment>
      <header className="header"></header>
      {this.state.width <= 800 ? <img src="images/w600_parallax_mobile_image.jpeg" alt="" /> : <ParallaxImage src="images/w1900_parallax_mobile_image.jpeg" />}
      <section className="content">
        {loremIpsum}
        {view}
      </section>
    </Fragment>
  }
}

export default App;
