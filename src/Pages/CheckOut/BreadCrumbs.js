import { Breadcrumb } from "react-bootstrap"

function BreadCrumbs () {
    return (
        <Breadcrumb className="ms-5">
          <Breadcrumb.Item  href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item  href="/products">Products</Breadcrumb.Item>
          <Breadcrumb.Item active>Check Out</Breadcrumb.Item>
        </Breadcrumb>
      );
    }
export default BreadCrumbs