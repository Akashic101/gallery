const slugify = require("slugify");

module.exports = function () {
  const fs = require("fs");
  const photos = require("./gallery.json");

  const tagsMap = {};

  for (const item of photos) {
    for (const tag of item.tags) {
      const slug = slugify(tag, { lower: true });
      if (!tagsMap[slug]) {
        tagsMap[slug] = {
          name: tag,
          slug: slug,
          items: [],
        };
      }
      tagsMap[slug].items.push(item);
    }
  }

  return Object.values(tagsMap);
};
