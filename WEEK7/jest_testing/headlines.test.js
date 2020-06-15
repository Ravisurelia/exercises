const headlines = require("./headlines");
const twApi = require("./twApi");
jest.mock("./twApi");
test("headlines filterd ut twets which do not have one link: ", () => {
  twApi.getTweets.mockResolvedValue([
    {
      entities: {
        urls: {
          url: "https://spiced.academy",
        },
      },
      full_text: "i love spiced",
    },
    {
      entities: {
        urls: [
          {
            url: "https://spiced.academy",
          },
          {
            url: "https://spiced.academy",
          },
        ],
      },
      full_text: "i love spiced",
    },
    {
      entities: {},
      full_text: "i love spiced",
    },
  ]);
  //now wecall th eheadline like we would
  return headlines().then((filteredTweets) => {
    console.log("filteredTweets: ", filteredTweets);
    expect(filteredTweets.length).toBe(1);
    expect(filteredTweets[0]).toEqual({
      text: "i love spiced",
      href: "https://spiced.academy",
    });
  });
});
