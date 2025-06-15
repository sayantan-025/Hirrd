import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { BarLoader } from "react-spinners";

const Onboarding = () => {
  const { user, isLoaded } = useUser();
  const navigate = useNavigate();

  const navigateUser = (currRole) => {
    navigate(currRole === "recruiter" ? "/post-job" : "/jobs");
  };

  const handleRoleSelection = async (role) => {
    await user
      .update({ unsafeMetadata: { role } })
      .then(() => {
        console.log(`Role updated to: ${role}`);
        navigateUser(role);
      })
      .catch((err) => {
        console.error("Error updating role:", err);
      });
  };

  useEffect(() => {
    if (user?.unsafeMetadata?.role) {
      navigateUser(user.unsafeMetadata.role);
    }
  }, [user]);

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-screen px-4">
        <BarLoader width={"100%"} color="#36d7b7" />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center px-4 py-20 sm:py-32 max-w-4xl mx-auto">
      <h2 className="gradient-title text-center font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tight">
        I am a...
      </h2>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        <Button
          variant="blue"
          className="h-24 sm:h-36 text-xl sm:text-2xl"
          onClick={() => handleRoleSelection("candidate")}
        >
          Candidate
        </Button>
        <Button
          variant="destructive"
          className="h-24 sm:h-36 text-xl sm:text-2xl"
          onClick={() => handleRoleSelection("recruiter")}
        >
          Recruiter
        </Button>
      </div>
    </div>
  );
};

export default Onboarding;
