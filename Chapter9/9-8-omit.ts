{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  function getVideo2(id: string): Video {
    return {
      id,
      title: 'video',
      url: 'https://..',
      data: 'hello'
    }
  }

  type VideoMetaData = Omit<Video, 'url' | 'data'>;

  // function getVideoMetaData(id: string): Pick<Video, 'id' | 'title'> {
  //   return {
  //     id,
  //     title: 'hello'
  //   }
  // }

  function getVideoMetaData2(id: string): VideoMetaData {
    return {
      id,
      title: 'bye'
    }
  }
}