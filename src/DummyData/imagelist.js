export const imageList = [
  "https://i0.wp.com/communitytechnetwork.org/wp-content/uploads/Volunteer_kate1.png?resize=800%2C563&quality=80&ssl=1",
  "https://images.squarespace-cdn.com/content/v1/536fe0f6e4b08758c320b79a/1639512806072-RIVUV6RF0MU9SSE797D1/image-asset.jpeg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRfYeLSBEul8Nhs2PXW_CC67G6Rt_ma5hRVxOwLy262w&s",
  "https://add.org/wp-content/uploads/2024/02/Volunteer-with-us-banner.png",
  "https://images.squarespace-cdn.com/content/v1/536fe0f6e4b08758c320b79a/1637196025088-DZZY3A8CM98E5UUHTWEM/Pick+a+Project+images+%2811%29.jpg?format=500w",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZvwLKMCygGOff6vWQA-cKZAffHzAupCQ2ZQRerVFO2g&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKX6kwgEKy0axlLHPSmLv45fPD-Eylx7YwNeskSVbIjg&s",
  "https://people.com/thmb/U8K8YifVP8sBKN_vad_i1mPrRTM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(519x199:521x201)/tom-brady-animal-shelter-volunteer-020223-2-04dfc5b8743840348a0fb1dd6da1dc6a.jpg",
];

export const getRandomImageUrl = () => {
  const randomIndex = Math.floor(Math.random() * imageList.length);
  return imageList[randomIndex];
};
