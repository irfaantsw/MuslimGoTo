import { FC, ReactElement } from "react";
import { Helmet } from "react-helmet";
import { makeStyles, createStyles } from "@material-ui/core/styles";

// components
import PageTitle from "src/components/Layouts/PageTitle";

// constants
import { APP_TITLE, PAGE_TITLE_GH_PRIVATE } from "src/utils/Constants";

// define css-in-js
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flex: 1,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  })
);

const GHPrivate: FC<{}> = (): ReactElement => {
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <title>
          {PAGE_TITLE_GH_PRIVATE} | {APP_TITLE}
        </title>
      </Helmet>
      <div className={classes.root}>
        <PageTitle title={PAGE_TITLE_GH_PRIVATE} />
      </div>
    </>
  );
};

export default GHPrivate;
