export const createNamespace = (prefix: any, keys: any) =>
  Object.keys(keys).reduce((newKeys: any, key: any) => {
    newKeys[key] = prefix ? `${prefix}.${key}` : `${key}`;
    return newKeys;
  }, {});

export const createEnum = (keys: any) => createNamespace(undefined, keys);

export const ScreenSize = {
  SM: 576,
  MD: 768,
  LG: 992,
  XL: 1200,
  XXL: 1600,
};

export const ScreenType = createEnum({
  XS: undefined,
  SM: undefined,
  MD: undefined,
  LG: undefined,
  XL: undefined,
  XXL: undefined,
});

export const CONTENT_SCREENS = {
  SECTION_1: "SECTION_1",
  SECTION_2: "SECTION_2",
  SECTION_3: "SECTION_3",
  SECTION_4: "SECTION_4",
  SECTION_5: "SECTION_5",
  SECTION_6: "SECTION_6",
  SECTION_7: "SECTION_7",
};

const SMALL_LOGO_SCREENS = [ScreenType.SM, ScreenType.MD];
const BIG_SCREENS = [ScreenType.XL, ScreenType.XXL];
const TABLET_SCREENS = [ScreenType.SM, ScreenType.MD, ScreenType.LG];
const SMALL_TABLETS_SCREENS = [ScreenType.XS, ScreenType.SM, ScreenType.MD];
const SHOW_DESKTOP_MENU = [ScreenType.XL, ScreenType.XXL, ScreenType.LG];
const SHOW_BIG_TABLET = [ScreenType.LG];
const MEDIUM_TABLET = [ScreenType.MD];

export const screenTypeSelector = (width: any) => {
  console.log("width", width);
  switch (true) {
    case width < ScreenSize.SM:
      return ScreenType.XS;

    case width >= ScreenSize.SM && width < ScreenSize.MD:
      return ScreenType.SM;

    case width >= ScreenSize.MD && width < ScreenSize.LG:
      return ScreenType.MD;

    case width >= ScreenSize.LG && width < ScreenSize.XL:
      return ScreenType.LG;

    case width >= ScreenSize.XL && width < ScreenSize.XXL:
      return ScreenType.XL;

    case width >= ScreenSize.XXL:
      return ScreenType.XXL;

    default:
      return ScreenType.XXL;
  }
};

export const isSmallScreenSelector = (type: any): any => {
  return SMALL_LOGO_SCREENS.includes(type);
};

export const isBigScreenSelector = (type: any): any => {
  return BIG_SCREENS.includes(type);
};

export const isMobileSelector = (type: any): any => {
  return type === ScreenType.XS;
};

export const isTabletSelector = (type: any): any => {
  return TABLET_SCREENS.includes(type);
};

export const isSmallTabletSelector = (type: any): any => {
  return SMALL_TABLETS_SCREENS.includes(type);
};

export const showDesktopMenuSelector = (type: any): any => {
  return SHOW_DESKTOP_MENU.includes(type);
};

export const showBigTabletSelector = (type: any): any => {
  return SHOW_BIG_TABLET.includes(type);
};

export const showMediumTabletSelectorr = (type: any): any => {
  return MEDIUM_TABLET.includes(type);
};

export const getScreenDimension = (window: any) => ({
  height: window?.innerHeight,
  width: window?.innerWidth,
});
