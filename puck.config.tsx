import type { Config } from "@measured/puck";

type Props = {
  HeadingBlock: { title: string };
  Hero: { img: string; title: string; subTitle: string };
};

export const config: Config<Props> = {
  components: {
    HeadingBlock: {
      fields: {
        title: { type: "text" },
      },
      defaultProps: {
        title: "Heading",
      },
      render: ({ title }) => (
        <div style={{ padding: 64 }}>
          <h1 className="text-3xl font-bold">{title}</h1>
        </div>
      ),
    },
    Hero: {
      fields: {
        img: { type: "text" },
        title: { type: "text" },
        subTitle: { type: "text" },
      },
      defaultProps: {
        img: "https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg",
        title: "Hero is here",
        subTitle: "Live a life so that you will rember",
      },
      render: ({ img, title, subTitle }) => (
        <div
          className="flex flex-col items-center justify-center"
          style={{
            height: "600px",
            padding: 64,
            backgroundImage: "url(" + img + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="bg-white/80 p-5 rounded-xl">
            <h1 className="text-3xl font-bold">{title}</h1>
            <h1 className="text-xl font-semibold pt-2 text-gray-800">
              {subTitle}
            </h1>
          </div>
        </div>
      ),
    },
  },
};

export default config;
