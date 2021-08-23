import * as React from 'react';
import {View, Text, Image} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {search} from '../config/tmd-api';

let Image_Http_URL = {
  uri: 'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
};
export default class MovieCarouselScreen extends React.Component {
  async componentDidMount() {
    this.setState({
      movies: await search('Avatar'),
    });
  }
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: 'Item 1',
          text: 'Text 1',
        },
        {
          title: 'Item 2',
          text: 'Text 2',
        },
        {
          title: 'Item 3',
          text: 'Text 3',
        },
        {
          title: 'Item 4',
          text: 'Text 4',
        },
        {
          title: 'Item 5',
          text: 'Text 5',
        },
      ],
      movies: [],
    };
  }

  _renderItem({item, index}) {
    return (
      <View
        style={{
          backgroundColor: 'floralwhite',
          borderRadius: 5,
          height: 250,
          padding: 50,
          marginLeft: 15,
          marginRight: 15,
        }}>
        <Text style={{fontSize: 30}}>{item.title}</Text>
        <Text>{this.state.movies[0] ? this.state.movies[0].poster_path : "SHIT"}</Text>
        <Image
          source={{
            uri: this.state.movies[0] ? this.state.movies[0].poster_path : ''
          }}
          style={{height: 200, margin: 5}}
        />
      </View>
    );
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'blue',
        }}>
        <Carousel
          layout={'default'}
          ref={(ref) => (this.carousel = ref)}
          data={this.state.carouselItems}
          sliderWidth={600}
          itemWidth={300}
          renderItem={this._renderItem.bind(this)}
          onSnapToItem={(index) => this.setState({activeIndex: index})}
          style={{alignItems: 'center'}}
        />
      </View>
    );
  }
}
