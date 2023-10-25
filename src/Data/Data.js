export const Data = [
    {
      navId: "0",
      name: "Main Menu",
      access: "Admin",
      subItems: [
        {
          id: 0,
          name: "Home",
          route: '/',
        },
        {
          id: 1,
          name: "Maps",
          route: '/test',
        },
        // {
        //   id: 2,
        //   name: "Security Question",
        //   route: '/test',
        // },
      ],
    },
    {
      navId: "1",
      name: "Organisation Level",
      access: [{ role: "Admin" }],
      subItems: [
        {
          id: 0,
          name: "Organisation Profile",
          route: '/test',
        },
        // {
        //   id: 1,
        //   name: "Application Profile",
        //   route: '/test',
        // },
        // {
        //   id: 2,
        //   name: "Application Administrator",
        //   route: '/test',
        // },
        // {
        //   id: 3,
        //   name: "User Profile",
        //   route: '/test',
        // },
        // {
        //   id: 4,
        //   name: "Privilege User",
        //   route: '/test',
        // },
        // {
        //   id: 5,
        //   name: "Reset Password",
        //   route: '/test',
        // },
        // {
        //   id: 6,
        //   name: "System Administrator",
        //   route: '/test',
        // },
        // {
        //   id: 7,
        //   name: "Clear Session",
        //   route: '/test',
        // },
        // {
        //   id: 8,
        //   name: "Recover Deleted User",
        //   route: '/test',
        // },
      ],
    },
    {
      navId: "2",
      name: "Application Level",
      access: [{ role: "Admin" }],
      subItems: [
        {
          id: 0,
          name: "Application User",
          route: '/test',
        },
        // {
        //   id: 1,
        //   name: "Unit Profile",
        //   route: '/test',
        // },
        // {
        //   id: 2,
        //   name: "Unit Administrator",
        //   route: '/test',
        // },
        // {
        //   id: 3,
        //   name: "Unit Task",
        //   route: '/test',
        // },
        // {
        //   id: 4,
        //   name: "User Profile",
        //   route: '/test',
        // },
        // {
        //   id: 5,
        //   name: "Reset Password",
        //   route: '/test',
        // },
        // {
        //   id: 6,
        //   name: "Clear Session",
        //   route: '/test',
        // },
        // {
        //   id: 7,
        //   name: "Recover Deleted User",
        //   route: '/test',
        // },
      ],
    },
    {
      navId: "3",
      name: "Unit Level",
      access: [{ role: "Admin" }, { role: "User" }],
      subItems: [
        {
          id: 0,
          name: "Unit Administrator",
          route: '/test',
        },
        // {
        //   id: 1,
        //   name: "Unit User",
        //   route: '/test',
        // },
        // {
        //   id: 2,
        //   name: "Group Profile",
        //   route: '/test',
        // },
        // {
        //   id: 3,
        //   name: "Group Task",
        //   route: '/test',
        // },
        // {
        //   id: 4,
        //   name: "Group User",
        //   route: '/test',
        // },
        // {
        //   id: 5,
        //   name: "User Profile",
        //   route: '/test',
        // },
        // {
        //   id: 6,
        //   name: "Reset Password",
        //   route: '/test',
        // },
        // {
        //   id: 7,
        //   name: "Clear Session",
        //   route: '/test',
        // },
        // {
        //   id: 8,
        //   name: "Recover Deleted User",
        //   route: '/test',
        // },
        // {
        //   id: 9,
        //   name: "User Task Request",
        //   route: '/test',
        // },
      ],
    },
  ];

  export const FooterData =[
    {
        id: 1,
        name: "About"
    },
    {
        id: 2,
        name: "Report"
    },
    {
        id: 3,
        name: "license"
    },
    {
        id: 4,
        name: "Copy Right"
    },
    {
        id: 5,
        name: "Details"
    }

  ]