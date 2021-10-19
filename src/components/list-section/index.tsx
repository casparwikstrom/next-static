import { tw } from 'twind';
import FeatureSvg from '@/constants/svg/features.svg';

const listItems = [
  {
    title: `Set KPIs`,
    description: `What are your goals and objectives? What do you want to achieve with the budget allocated towards Influencers? Within which core markets? We will focus your Influencer Marketing Campaign based on your vision, mission and achieving the goals you set.`,
  },
  {
    title: `TARGET AUDIENCE`,
    description: `Who are your targeted customers in terms of gender, age and market? What are their interests? Which social media do they use? Our influencer marketing agency will help define this personas in order to create influencer marketing campaigns that reach the right target audience.`,
  },
  {
    title: `INFLUENCER IDENTIFICATION`,
    description: `Our influencer marketing agency will be able to match your target audience with the relevant influencers. Our clients have full access to the influencers’ target demographics and can see which ones are the perfect ones for their Influencer Marketing Campaigns.`,
  },
  {
    title: `CONTRACTING INFLUENCERS`,
    description: `The relationship between you and an Influencer has to involve a legal agreement where the Influencers know their rights and obligations. We will take care of having each Influencer that will be part of your Campaign sign an agreement and commit to the deliverables.`,
  },
  {
    title: `CONTENT CREATION`,
    description: `In order to make any Influencer Campaign successful, you cannot just rely on the Influencers following, you need to think how to best engage with their users. We will help you create concepts and content that will make the Influencers followers interact with.`,
  },
  {
    title: `TRACKING RESULTS`,
    description: `Tracking results is the most important thing to do when you want to understand the success of an Influencer Marketing campaign. We will put in place tracking pixels and tools that will provide you extensive reporting and tangible metrics for any of the activities.`,
  },
];

const ListSection = () => (
  <section className={tw(`lg:py-28 pt-28 overflow-hidden`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
      <div className={tw(`mb-16 text-center`)}>
        <h2 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>Grow your revenue</h2>
        <p className={tw(`mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>
          Transform your business
        </p>
      </div>
      <div className={tw(`flex flex-wrap -mx-8 items-center`)}>
        <div className={tw(`w-full lg:w-1/2 px-8`)}>
          <ul className={tw(`space-y-12`)}>
            {listItems.map((item, index) => (
              <li className={tw(`flex -mx-4`)} key={item.title}>
                <div className={tw(`px-4`)}>
                  <span
                    className={tw(`flex w-16 h-16 mx-auto items-center
                      justify-center text-2xl font-bold rounded-full
                      bg-blue-50 text-blue-500`)}
                  >
                    {index + 1}
                  </span>
                </div>
                <div className={tw(`px-4`)}>
                  <h3 className={tw(`my-4 text-xl font-semibold`)}>{item.title}</h3>
                  <p className={tw(`text-gray-500 leading-loose`)}>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={tw(`w-full lg:w-1/2 px-8`)}>
          <div className={tw(`lg:mb-12 lg:mb-0 pb-12 lg:pb-0 mt-16 lg:mt-0 mx-6 lg:mx-0`)}>
            <FeatureSvg width="100%" height="100%" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ListSection;
