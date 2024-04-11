import { Helmet } from "react-helmet";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
  const {user} = useAuth();

  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro Boss | User Home</title>
      </Helmet>
      <SectionTitle
        subHeading={"Welcome to Home Page"}
        heading={"Home Page"}
      ></SectionTitle>

      <div>
      <h2 className="text-3xl">
                <span>Hi, Welcome To.. "User Page" SA Bistro Reasturent</span> <hr />
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>
      </div>

     

    </div>
  );
};

export default UserHome;
