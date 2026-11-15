export type FieldMedia = {
  id: string;
  title: string;
  description?: string;
} & (
  | { type: 'image'; src: string; alt: string; width: number; height: number }
  | { type: 'video'; src: string; poster: string; captions?: string }
);

// Only user-supplied field footage belongs here; do not substitute concept imagery.
export const fieldGalleries: {
  slug: string;
  title: string;
  description: string;
  kind: 'marine' | 'pump';
  cover: { src: string; alt: string };
  media: FieldMedia[];
}[] = [
  {
    slug: 'marin-cozumler',
    title: 'Marin Çözümler Görselleri',
    description: 'Marin uygulamalarımıza ait saha fotoğrafları ve videoları.',
    kind: 'marine',
    cover: { src: '/sahadan-gorseller/v1/marin/video-02.jpg', alt: 'Seyir halindeki tekne ve elektrikli dıştan takma motor' },
    media: [
  {
    "id": "marin-image-01",
    "type": "image",
    "src": "/sahadan-gorseller/v1/marin/image-01.jpeg",
    "title": "DewJet fuar standı",
    "width": 996,
    "height": 1600,
    "alt": "DewJet fuar standı"
  },
  {
    "id": "marin-image-02",
    "type": "image",
    "src": "/sahadan-gorseller/v1/marin/image-02.jpeg",
    "title": "İskelede buluşma",
    "width": 2048,
    "height": 1536,
    "alt": "İskelede buluşma"
  },
  {
    "id": "marin-image-03",
    "type": "image",
    "src": "/sahadan-gorseller/v1/marin/image-03.jpeg",
    "title": "Marin uygulama tekneleri",
    "width": 1320,
    "height": 1910,
    "alt": "Marin uygulama tekneleri"
  },
  {
    "id": "marin-image-04",
    "type": "image",
    "src": "/sahadan-gorseller/v1/marin/image-04.jpeg",
    "title": "Teknede akü grubu",
    "width": 1152,
    "height": 2048,
    "alt": "Teknede akü grubu"
  },
  {
    "id": "marin-video-01",
    "type": "video",
    "src": "/sahadan-gorseller/v1/marin/video-01.mp4",
    "title": "Tekne kumanda ekranı",
    "poster": "/sahadan-gorseller/v1/marin/video-01.jpg"
  },
  {
    "id": "marin-video-02",
    "type": "video",
    "src": "/sahadan-gorseller/v1/marin/video-02.mp4",
    "title": "Tekne seyir görüntüleri",
    "poster": "/sahadan-gorseller/v1/marin/video-02.jpg"
  },
  {
    "id": "marin-video-03",
    "type": "video",
    "src": "/sahadan-gorseller/v1/marin/video-03.mp4",
    "title": "Su üzerinde tekne uygulaması",
    "poster": "/sahadan-gorseller/v1/marin/video-03.jpg"
  },
  {
    "id": "marin-video-04",
    "type": "video",
    "src": "/sahadan-gorseller/v1/marin/video-04.mp4",
    "title": "Marin sistem tanıtımı",
    "poster": "/sahadan-gorseller/v1/marin/video-04.jpg"
  },
  {
    "id": "marin-video-05",
    "type": "video",
    "src": "/sahadan-gorseller/v1/marin/video-05.mp4",
    "title": "Batarya sistemi incelemesi",
    "poster": "/sahadan-gorseller/v1/marin/video-05.jpg"
  }
],
  },
  {
    slug: 'elektrikli-pompa-cozumleri',
    title: 'Elektrikli Pompa Çözümleri Görselleri',
    description: 'Elektrikli pompa uygulamalarımıza ait saha fotoğrafları ve videoları.',
    kind: 'pump',
    cover: { src: '/sahadan-gorseller/v1/pompa/video-03.jpg', alt: 'Göl kıyısında elektrikli pompayla su tahliye çalışması' },
    media: [
  {
    "id": "pompa-video-01",
    "type": "video",
    "src": "/sahadan-gorseller/v1/pompa/video-01.mp4",
    "title": "Sahada pompa ve hortum uygulaması",
    "poster": "/sahadan-gorseller/v1/pompa/video-01.jpg"
  },
  {
    "id": "pompa-video-02",
    "type": "video",
    "src": "/sahadan-gorseller/v1/pompa/video-02.mp4",
    "title": "Elektrikli pompa saha çalışması",
    "poster": "/sahadan-gorseller/v1/pompa/video-02.jpg"
  },
  {
    "id": "pompa-video-03",
    "type": "video",
    "src": "/sahadan-gorseller/v1/pompa/video-03.mp4",
    "title": "Su tahliye uygulaması",
    "poster": "/sahadan-gorseller/v1/pompa/video-03.jpg"
  },
  {
    "id": "pompa-video-04",
    "type": "video",
    "src": "/sahadan-gorseller/v1/pompa/video-04.mp4",
    "title": "Sistem ve bağlantı incelemesi",
    "poster": "/sahadan-gorseller/v1/pompa/video-04.jpg"
  },
  {
    "id": "pompa-video-05",
    "type": "video",
    "src": "/sahadan-gorseller/v1/pompa/video-05.mp4",
    "title": "Teknede pompa uygulaması",
    "poster": "/sahadan-gorseller/v1/pompa/video-05.jpg"
  }
],
  },
];
