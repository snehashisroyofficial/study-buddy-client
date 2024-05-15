import { Helmet } from "react-helmet";

const AboutUs = () => {
  return (
    <div className="space-y-6 py-16 px-4 dark:text-white">
      <Helmet>
        <title>About us</title>
      </Helmet>
      <h1 className="text-4xl font-bold">
        Welcome to
        <span className="text-orange-500"> StuddyBuddy!</span>
      </h1>
      <p>
        We are passionate about creating a platform that empowers individuals to
        learn and grow through collaboration. We believe that by sharing
        assignments, providing constructive feedback, and engaging in a
        supportive community, learners of all levels can achieve remarkable
        things.
      </p>
      <h1 className="text-2xl font-bold">Our Mission:</h1>
      <ul>
        <li>
          To foster a collaborative learning environment where users can
          connect, share knowledge, and challenge each other.
        </li>
        <li>
          To provide a platform that makes creating, receiving, and giving
          feedback on assignments a seamless and enriching experience.
        </li>
        <li>
          To empower learners to take control of their education and develop
          valuable skills for success.
        </li>
      </ul>
      <h1 className="text-2xl font-bold">The Team:</h1>
      <p>
        StudyBuddy is driven by a team of passionate educators, developers, and
        lifelong learners. We are committed to building a user-friendly and
        innovative platform that caters to the diverse needs of our users.
      </p>
      <h1 className="text-2xl font-bold">Why Choose Us?</h1>
      <ul>
        <li>
          Focus on Collaboration: We believe that learning is a social
          experience. Our platform facilitates interaction and knowledge
          exchange between users.
        </li>
        <li>
          Seamless Feedback System: Our tools make providing and receiving
          feedback clear, efficient, and insightful.
        </li>
        <li>
          Diverse Content Library: Explore a wide range of assignments across
          various subjects and skill levels.
        </li>
        <li>
          Empowering Environment: Take control of your learning journey by
          creating personalized assignments and setting goals.
        </li>
      </ul>
      <h1 className="text-2xl font-bold">Join the Community:</h1>
      <p>
        We invite you to join our thriving community of learners and educators.
        Whether you're looking to master new skills, share your expertise, or
        simply connect with like-minded individuals, [Your Platform Name] is the
        perfect place for you.
      </p>
      <h1 className="text-2xl font-bold">Get Started Today!</h1>
      <p>
        Sign up for free and experience the power of collaborative learning.
      </p>
    </div>
  );
};

export default AboutUs;
