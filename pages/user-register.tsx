import * as React from "react";
import BusinessRegister from "../components/Authentication/SignUp/CompanyRegister/AgencyRegister";
import CompanyRegister from "../components/Authentication/SignUp/CompanyRegister";
import { useRouter } from "next/router";
interface IAppProps {}

const CompanyRegistration: React.FunctionComponent<IAppProps> = (props) => {
  const route = useRouter();
  const query = route.query;
  const handle = query["type"];
  const [company, setCompany] = React.useState("");
  const [business, setBusiness] = React.useState("");

  React.useEffect(() => {
    if (handle == "company") {
      setCompany("company");
    } else if (handle == "business") {
      setBusiness("business");
    }
  }, [company, business]);

  return (
    <div>
      {company == "company" ? <CompanyRegister /> : <></>}
      {business == "business" ? <BusinessRegister /> : <></>}
    </div>
  );
};

export default CompanyRegistration;
