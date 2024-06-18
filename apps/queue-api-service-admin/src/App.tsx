import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { QueueItemList } from "./queueItem/QueueItemList";
import { QueueItemCreate } from "./queueItem/QueueItemCreate";
import { QueueItemEdit } from "./queueItem/QueueItemEdit";
import { QueueItemShow } from "./queueItem/QueueItemShow";
import { KafkaMessageList } from "./kafkaMessage/KafkaMessageList";
import { KafkaMessageCreate } from "./kafkaMessage/KafkaMessageCreate";
import { KafkaMessageEdit } from "./kafkaMessage/KafkaMessageEdit";
import { KafkaMessageShow } from "./kafkaMessage/KafkaMessageShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"QueueAPIService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="QueueItem"
          list={QueueItemList}
          edit={QueueItemEdit}
          create={QueueItemCreate}
          show={QueueItemShow}
        />
        <Resource
          name="KafkaMessage"
          list={KafkaMessageList}
          edit={KafkaMessageEdit}
          create={KafkaMessageCreate}
          show={KafkaMessageShow}
        />
      </Admin>
    </div>
  );
};

export default App;
