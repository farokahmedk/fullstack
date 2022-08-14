const js = {
  name: "Javascript",
  author: {
    name: "HM Nayem",
    email: "hasan.m.nayem@gmail.com",
  },
  content: {
    video: {
      count: 222,
    },
  },
};
const node = {
  name: "Node Js",
  author: {
    name: "HM Nayem",
    email: "hasan.m.nayem@gmail.com",
  },
  content: {
    video: {
      count: 234,
    },
  },
};

const react = {
  name: "React",
  author: {
    name: "HM Nayem",
    email: "hasan.m.nayem@gmail.com",
  },
  content: {
    video: {
      count: 234,
    },
    article: {
      count: 15,
    },
    quiz: {
      count: 10,
    },
  },
};

const courses = [js, node, react];

const inspectObj = (obj, path, defaultReturn = 0) => {
  // const path = "content.video.count";
  return path.split(".").reduce((acc, curr) => {
    if (acc) {
      return acc[curr];
    }
    return defaultReturn;
  }, obj);
};

courses.forEach((course) => {
  console.log(
    `Course: ${course.name}. Article = ${inspectObj(
      course,
      "content.article.count"
    )}, Video = ${inspectObj(
      course,
      "content.video.count"
    )}, Quiz = ${inspectObj(course, "content.quiz.count")}`
  );
});
