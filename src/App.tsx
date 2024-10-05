import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  IconButton,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { GitHub, LinkedIn, Email, Menu as MenuIcon } from "@mui/icons-material";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiVuedotjs,
  SiPhp,
  SiLaravel,
  SiMysql,
} from "react-icons/si";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2D3E50",
    },
    secondary: {
      main: "#E74C3C",
    },
    background: {
      default: "#ECF0F1",
      paper: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: "3rem",
      "@media (min-width:600px)": {
        fontSize: "4rem",
      },
    },
    h2: {
      fontWeight: 600,
    },
  },
});

const AnimatedTypography = animated(Typography);
const AnimatedCard = animated(Card);

export default function ModernPortfolio() {
  const [hoveredProject, setHoveredProject] = useState<Number>(NaN);

  const skills = [
    { name: "HTML5", icon: SiHtml5 },
    { name: "CSS3", icon: SiCss3 },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "React", icon: SiReact },
    { name: "Vue.js", icon: SiVuedotjs },
    { name: "PHP", icon: SiPhp },
    { name: "Laravel", icon: SiLaravel },
    { name: "MySQL", icon: SiMysql },
  ];

  const projects = [
    {
      title: "Project 1",
      description: "A brief description of project 1",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Project 2",
      description: "A brief description of project 2",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Project 3",
      description: "A brief description of project 3",
      image: "/placeholder.svg?height=300&width=400",
    },
  ];

  const headerProps = useSpring({
    from: { opacity: 0, transform: "translate3d(0,-40px,0)" },
    to: { opacity: 1, transform: "translate3d(0,0px,0)" },
    delay: 300,
  });

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
  });

  const projectCardSpring = useSpring({
    scale: hoveredProject !== null ? 1.05 : 1,
    boxShadow:
      hoveredProject !== null
        ? "0 8px 40px rgba(0,0,0,0.12)"
        : "0 4px 20px rgba(0,0,0,0.08)",
  });

  const socialIcons = [
    { icon: GitHub, label: "GitHub" },
    { icon: LinkedIn, label: "LinkedIn" },
    { icon: Email, label: "Email" },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{ flexGrow: 1, bgcolor: "background.default", minHeight: "100vh" }}
      >
        <AppBar position="static" color="transparent" elevation={0}>
          <Container>
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, fontWeight: "bold" }}
              >
                NY
              </Typography>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                {["About", "Skills", "Projects", "Contact"].map((item) => (
                  <Button key={item} sx={{ color: "text.primary", mx: 1 }}>
                    {item}
                  </Button>
                ))}
              </Box>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ display: { md: "none" } }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>

        <Container maxWidth="lg" sx={{ mt: 8 }}>
          <AnimatedTypography
            variant="h1"
            gutterBottom
            style={headerProps}
            sx={{
              wordBreak: "break-word",
              hyphens: "auto",
              overflowWrap: "break-word",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Nakamizu Yuki
          </AnimatedTypography>
          <AnimatedTypography
            variant="h4"
            gutterBottom
            style={fadeIn}
            sx={{
              mb: 6,
              color: "text.secondary",
              fontSize: { xs: "1.5rem", md: "2.125rem" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Full Stack Developer
          </AnimatedTypography>

          <Box sx={{ my: 8 }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Skills
            </Typography>
            <Grid container spacing={2}>
              {skills.map((skill, index) => (
                <Grid item key={index} xs={4} sm={3} md={2}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      p: 2,
                      bgcolor: "background.paper",
                      borderRadius: 2,
                      boxShadow: 1,
                      transition: "all 0.3s",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: 3,
                      },
                    }}
                  >
                    <skill.icon size={40} color={theme.palette.primary.main} />
                    <Typography
                      variant="body2"
                      sx={{ mt: 1, fontWeight: "medium", textAlign: "center" }}
                    >
                      {skill.name}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box sx={{ my: 8 }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold", mb: 4 }}
            >
              Projects
            </Typography>
            <Grid container spacing={4}>
              {projects.map((project, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <AnimatedCard
                    onMouseEnter={() => setHoveredProject(index)}
                    onMouseLeave={() => setHoveredProject(NaN)}
                    style={projectCardSpring}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={project.image}
                      alt={project.title}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        sx={{ fontWeight: "bold" }}
                      >
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {project.description}
                      </Typography>
                    </CardContent>
                  </AnimatedCard>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box sx={{ my: 8 }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold", mb: 4 }}
            >
              Get in Touch
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              {socialIcons.map(({ icon: Icon, label }, index) => (
                <IconButton
                  key={index}
                  aria-label={label}
                  size="large"
                  sx={{
                    color: "primary.main",
                    "&:hover": {
                      color: "secondary.main",
                      transform: "translateY(-3px)",
                    },
                    transition: "all 0.3s",
                  }}
                >
                  <Icon fontSize="large" />
                </IconButton>
              ))}
            </Box>
          </Box>
        </Container>

        <Box
          component="footer"
          sx={{ bgcolor: "background.paper", py: 6, mt: 8 }}
        >
          <Container maxWidth="lg">
            <Typography variant="body2" color="text.secondary" align="center">
              © 2023 Nakamizu Yuki. All rights reserved.
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
