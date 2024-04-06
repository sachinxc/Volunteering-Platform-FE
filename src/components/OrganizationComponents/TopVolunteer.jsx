// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import LinearProgress from "@mui/material/LinearProgress";

// ** Icons Imports
import DotsVertical from "@mui/icons-material/MoreVert";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const data = [
  {
    progress: 75,
    imgHeight: 20,
    title: "Zipcar",
    color: "primary",
    amount: "$24,895.65",
    subtitle: "Vuejs, React & HTML",
    imgSrc: "/images/cards/logo-zipcar.png",
  },
  {
    progress: 50,
    color: "info",
    imgHeight: 27,
    title: "Bitbank",
    amount: "$8,650.20",
    subtitle: "Sketch, Figma & XD",
    imgSrc: "/images/cards/logo-bitbank.png",
  },
  {
    progress: 20,
    imgHeight: 20,
    title: "Aviato",
    color: "secondary",
    amount: "$1,245.80",
    subtitle: "HTML & Angular",
    imgSrc: "/images/cards/logo-aviato.png",
  },
];

const TopVolunteer = () => {
  return (
    <Card sx={{ boxShadow: 0 }}>
      <CardHeader
        title="Top Volunteer"
        titleTypographyProps={{
          sx: {
            lineHeight: "1.6 !important",
            letterSpacing: "0.15px !important",
          },
        }}
        action={
          <IconButton
            size="small"
            aria-label="settings"
            className="card-more-options"
            sx={{ color: "text.secondary" }}
          >
            <DotsVertical />
          </IconButton>
        }
      />
      <CardContent sx={{ pt: (theme) => `${theme.spacing(2.25)} !important` }}>
        <Box sx={{ mb: 1.5, display: "flex", alignItems: "center" }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 600, fontSize: "2.125rem !important" }}
          >
            15
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              color: "success.main",
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: 600, color: "success.main", ml: 2 }}
            >
              Top Contributors
            </Typography>
          </Box>
        </Box>

        <Typography component="p" variant="caption" sx={{ mb: 4 }}>
          245 All Contributors
        </Typography>

        {data.map((item, index) => {
          return (
            <Box
              key={item.title}
              sx={{
                display: "flex",
                alignItems: "center",
                ...(index !== data.length - 1 ? { mb: 2 } : {}),
              }}
            >
              <Avatar
                variant="rounded"
                sx={{
                  mr: 3,
                  backgroundColor: "secondary",
                }}
              >
                {item.title.charAt(0)}
              </Avatar>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    marginRight: 2,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{ mb: 0.5, fontWeight: 600, color: "text.primary" }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </Box>
            </Box>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default TopVolunteer;
