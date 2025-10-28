const facts = [
  {
    title: "The Amazon Rainforest",
    desc: "The Amazon Rainforest spans nine countries and covers over 5.5 million square kilometers, making it the largest tropical rainforest on Earth. It produces about 20% of the world’s oxygen and contains one in ten known species on the planet. Deforestation remains its biggest threat, altering global climate patterns.",
    image: "https://images.unsplash.com/photo-1605940169839-aedc047b0b06?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=765"
  },
  {
    title: "The Great Barrier Reef",
    desc: "Stretching over 2,300 kilometers, the Great Barrier Reef is the world’s largest coral reef system, composed of more than 2,900 individual reefs and 900 islands. It is home to thousands of species, including sea turtles, clownfish, and vibrant corals. Rising sea temperatures and pollution have led to widespread coral bleaching in recent decades.",
    image: "https://images.unsplash.com/photo-1514907283155-ea5f4094c70c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
  },
  {
    title: "Mount Everest",
    desc: "Mount Everest, standing at 8,848 meters (29,029 feet), is the highest peak above sea level. It straddles the border between Nepal and Tibet and has become a symbol of human endurance and exploration. The mountain faces extreme weather, and climbers often experience temperatures below -30°C at its summit.",
    image: "https://images.unsplash.com/photo-1594725224909-0e66d59ed0f1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
  },
  {
    title: "The Sahara Desert",
    desc: "The Sahara Desert, located in North Africa, is the largest hot desert on Earth, spanning about 9 million square kilometers. Despite its harsh conditions, it hosts unique flora and fauna adapted to extreme heat. Scientists believe the Sahara was once a lush, green region thousands of years ago.",
    image: "https://images.unsplash.com/photo-1486314030120-d5ab85fe58cd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1176"
  },
  {
    title: "The Northern Lights (Aurora Borealis)",
    desc: "The Northern Lights are dazzling natural light displays caused by charged particles from the Sun colliding with Earth’s atmosphere. They paint the sky in hues of green, pink, and violet, mainly seen near the Arctic Circle. Indigenous cultures have long viewed them as mystical messengers or spirits dancing in the sky.",
    image: "https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
  },
  {
    title: "Victoria Falls",
    desc: "Located between Zambia and Zimbabwe, Victoria Falls is one of the largest waterfalls in the world, stretching 1.7 kilometers wide and dropping over 100 meters. The local name, 'Mosi-oa-Tunya,' means 'The Smoke That Thunders' — a fitting description for its roaring sound and mist visible from miles away.",
    image: "https://images.unsplash.com/photo-1603201236596-eb1a63eb0ede?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
  },
  {
    title: "Antarctica",
    desc: "Antarctica is the coldest, driest, and windiest continent, containing 60% of the world’s fresh water locked in ice. It is technically a desert due to its minimal precipitation. Beneath its frozen surface, scientists continue to uncover ancient meteorites, unique microbial life, and evidence of past climates.",
    image: "https://images.unsplash.com/photo-1603548746365-0c7a1583d826?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=722"
  },
  {
    title: "The Grand Canyon",
    desc: "Carved by the Colorado River over millions of years, the Grand Canyon stretches 446 kilometers long and plunges over 1,800 meters deep. Its exposed rock layers reveal nearly two billion years of geological history. Visitors from around the world come to witness its breathtaking scale and colorful landscape.",
    image: "https://images.unsplash.com/photo-1615551043360-33de8b5f410c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1176"
  }
  ,
{
  title: "The Galápagos Islands",
  desc: "Located about 1,000 kilometers off the coast of Ecuador, the Galápagos Islands are a UNESCO World Heritage Site known for their unique biodiversity. The isolated ecosystem inspired Charles Darwin’s theory of evolution by natural selection. Each island harbors species found nowhere else on Earth, including giant tortoises and marine iguanas.",
  image: "https://plus.unsplash.com/premium_photo-1697729789743-a4f048eca3aa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
},
{
  title: "The Himalayas",
  desc: "Stretching across five countries—India, Nepal, Bhutan, China, and Pakistan—the Himalayas form the highest mountain range in the world. They are home to Mount Everest and countless other peaks above 8,000 meters. The range influences regional climate patterns and is the source of many of Asia’s major rivers.",
  image: "https://plus.unsplash.com/premium_photo-1661963741928-673ed7f7c00b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171"
}
];
