import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const items = [
  { key: 0, text: "The rocket has launched" },
  { key: 1, text: "Approaching 3500m" },
  { key: 2, text: "Satellite Deployment" },
  { key: 3, text: "Mission Completed" },
];

export default function InteractiveList() {
  return (
          <List>
            {items.map((item) => (
              <ListItem key={item.key}>
                <ListItemAvatar>
                  {false ? (
                    <Avatar
                      style={{
                        backgroundColor: "green",
                      }}
                    >
                      <CheckIcon
                        style={{
                          color: "white",
                        }}
                      />
                    </Avatar>
                  ) : (
                    <Avatar
                      style={{
                        backgroundColor: "red",
                      }}
                    >
                      <CloseIcon
                        style={{
                          color: "white",
                        }}
                      />
                    </Avatar>
                  )}
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography sx={{ color: "#fcfcfc" }}>
                      {item.text}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
  );
}
