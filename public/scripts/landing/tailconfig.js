function require(package) {
    return package;
}
var tailwindConfig = {
    "presets": [
        {
            "theme": {
                "extend": {
                    "screens": {
                        "xs": "480px",
                        "sm": "640px",
                        "md": "768px",
                        "lg": "1024px",
                        "xl": "1280px",
                        "2xl": "1536px"
                    },
                    "colors": {
                        "transparent": "transparent",
                        "current": "currentColor",
                        "black": "#000",
                        "white": "#fff",
                        "gray": {
                            "50": "#FAFBFC",
                            "100": "#EEF0F3",
                            "200": "#D5DAE1",
                            "300": "#C3C6CE",
                            "400": "#959AAA",
                            "500": "#80818C",
                            "600": "#616372",
                            "700": "#424453",
                            "800": "#2B2E43",
                            "900": "#1E2238"
                        },
                        "red": {
                            "50": "#FFE5E6",
                            "100": "#FFC8C8",
                            "200": "#FFB4B4",
                            "300": "#FF9595",
                            "400": "#FF7979",
                            "500": "#FF6666",
                            "600": "#FB4949",
                            "700": "#F02E2E",
                            "800": "#E10808",
                            "900": "#C30000"
                        },
                        "yellow": {
                            "50": "#FFF9EB",
                            "100": "#FFF1CC",
                            "200": "#FFE9B0",
                            "300": "#FFDF8A",
                            "400": "#FFD873",
                            "500": "#FFD158",
                            "600": "#FFCB42",
                            "700": "#FFC428",
                            "800": "#FFBF1A",
                            "900": "#EFAC00"
                        },
                        "orange": {
                            "50": "#FFF2EE",
                            "100": "#FFDBD1",
                            "200": "#FFC7B7",
                            "300": "#FFAF9B",
                            "400": "#FF977D",
                            "500": "#FF8E72",
                            "600": "#FF7A59",
                            "700": "#FF6C47",
                            "800": "#FF5621",
                            "900": "#FF460C"
                        },
                        "green": {
                            "50": "#E5FDF4",
                            "100": "#C3F9E6",
                            "200": "#A5F4D8",
                            "300": "#6BECBE",
                            "400": "#58E1B0",
                            "500": "#43D29F",
                            "600": "#25CA8E",
                            "700": "#17C083",
                            "800": "#0BB678",
                            "900": "#00AD6F"
                        },
                        "blue": {
                            "50": "#E3F7FF",
                            "100": "#C7EEFF",
                            "200": "#9FE2FF",
                            "300": "#6FD4FF",
                            "400": "#50CAFF",
                            "500": "#5ACEFF",
                            "600": "#38C3FF",
                            "700": "#21BCFF",
                            "800": "#00AEF9",
                            "900": "#009EE1"
                        },
                        "pink": {
                            "50": "#fee8f2",
                            "100": "#febcda",
                            "200": "#F1DAF1",
                            "300": "#cabdff",
                            "400": "#b5aae5",
                            "500": "#fd2284",
                            "600": "#e31e76",
                            "700": "#ca1b69",
                            "800": "#b1175c",
                            "900": "#97144f"
                        },
                        "indigo": {
                            "50": "#f1edfd",
                            "100": "#d6c9f8",
                            "200": "#bba5f3",
                            "300": "#764ae6",
                            "400": "#6938e4",
                            "500": "#5B26E1",
                            "600": "#511dd4",
                            "700": "#4a1bc1",
                            "800": "#3b159a",
                            "900": "#250d60"
                        },
                        "purple": {
                            "50": "#efebff",
                            "100": "#d4caff",
                            "200": "#cfc3ff",
                            "300": "#cabdff",
                            "400": "#b5aae5",
                            "500": "#a197cc",
                            "600": "#8d84b2",
                            "700": "#797199",
                            "800": "#655e7f",
                            "900": "#504b66"
                        }
                    },
                    "spacing": {
                        "0": "0px",
                        "1": "0.25rem",
                        "2": "0.5rem",
                        "3": "0.75rem",
                        "4": "1rem",
                        "5": "1.25rem",
                        "6": "1.5rem",
                        "7": "1.75rem",
                        "8": "2rem",
                        "9": "2.25rem",
                        "10": "2.5rem",
                        "11": "2.75rem",
                        "12": "3rem",
                        "14": "3.5rem",
                        "16": "4rem",
                        "18": "4.5rem",
                        "20": "5rem",
                        "24": "6rem",
                        "28": "7rem",
                        "32": "8rem",
                        "36": "9rem",
                        "40": "10rem",
                        "44": "11rem",
                        "48": "12rem",
                        "52": "13rem",
                        "56": "14rem",
                        "60": "15rem",
                        "64": "16rem",
                        "72": "18rem",
                        "80": "20rem",
                        "96": "24rem",
                        "112": "28rem",
                        "128": "32rem",
                        "px": "1px",
                        "0.5": "0.125rem",
                        "1.5": "0.375rem",
                        "2.5": "0.625rem",
                        "3.5": "0.875rem"
                    },
                    "animation": {
                        "none": "none",
                        "spin": "spin 1s linear infinite",
                        "ping": "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
                        "pulse": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                        "bounce": "bounce 1s infinite",
                        "movingLeft": "movingLeft 35s linear infinite",
                        "movingRight": "movingRight 35s linear infinite",
                        "pulseText": "pulseText 10s ease-in-out infinite",
                        "pulseTextDark": "pulseTextDark 10s ease-in-out infinite",
                        "pulseTextGreen": "pulseTextGreen 10s ease-in-out infinite",
                        "showLine": "showLine 5s linear infinite",
                        "searchInput": "showSearchInput 1s linear",
                        "fill": "animFill 500ms linear both"
                    },
                    "backgroundImage": {
                        "none": "none",
                        "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
                        "gradient-to-tr": "linear-gradient(to top right, var(--tw-gradient-stops))",
                        "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
                        "gradient-to-br": "linear-gradient(to bottom right, var(--tw-gradient-stops))",
                        "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",
                        "gradient-to-bl": "linear-gradient(to bottom left, var(--tw-gradient-stops))",
                        "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))",
                        "gradient-to-tl": "linear-gradient(to top left, var(--tw-gradient-stops))",
                        "gradient-white": "linear-gradient(0deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)",
                        "gradient-black": "linear-gradient(0deg, #07070E 0%, rgba(0, 0, 0, 0) 100%)"
                    },
                    "backgroundPosition": {
                        "bottom": "bottom",
                        "center": "center",
                        "left": "left",
                        "left-bottom": "left bottom",
                        "left-top": "left top",
                        "right": "right",
                        "right-bottom": "right bottom",
                        "right-top": "right top",
                        "top": "top"
                    },
                    "backgroundSize": {
                        "auto": "auto",
                        "cover": "cover",
                        "contain": "contain"
                    },
                    "blur": {
                        "0": "0",
                        "none": "0",
                        "sm": "4px",
                        "DEFAULT": "8px",
                        "md": "12px",
                        "lg": "16px",
                        "xl": "24px",
                        "2xl": "40px",
                        "3xl": "64px"
                    },
                    "brightness": {
                        "0": "0",
                        "50": ".5",
                        "75": ".75",
                        "90": ".9",
                        "95": ".95",
                        "100": "1",
                        "105": "1.05",
                        "110": "1.1",
                        "125": "1.25",
                        "150": "1.5",
                        "200": "2"
                    },
                    "borderRadius": {
                        "none": "0px",
                        "sm": "0.125rem",
                        "DEFAULT": "0.25rem",
                        "md": "0.375rem",
                        "lg": "0.5rem",
                        "xl": "0.625rem",
                        "2xl": "0.75rem",
                        "3xl": "1rem",
                        "4xl": "1.25rem",
                        "5xl": "1.5rem",
                        "full": "9999px"
                    },
                    "borderWidth": {
                        "0": "0px",
                        "2": "2px",
                        "4": "4px",
                        "8": "8px",
                        "DEFAULT": "1px"
                    },
                    "boxShadow": {
                        "sm": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
                        "DEFAULT": "0px 0px 0px 1px rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
                        "md": " 0px 0px 0px 1px rgba(18, 105, 63, 0.08), 0px 1px 2px 0px rgba(87, 92, 86, 0.16), 0px 24px 24px -12px rgba(54, 74, 54, 0.06)",
                        "lg": "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
                        "xl": "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                        "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
                        "inner": "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
                        "none": "none"
                    },
                    "contrast": {
                        "0": "0",
                        "50": ".5",
                        "75": ".75",
                        "100": "1",
                        "125": "1.25",
                        "150": "1.5",
                        "200": "2"
                    },
                    "content": {
                        "none": "none"
                    },
                    "cursor": {
                        "auto": "auto",
                        "default": "default",
                        "pointer": "pointer",
                        "wait": "wait",
                        "text": "text",
                        "move": "move",
                        "help": "help",
                        "not-allowed": "not-allowed"
                    },
                    "dropShadow": {
                        "sm": "0 1px 1px rgba(0,0,0,0.05)",
                        "DEFAULT": [
                            "0 1px 2px rgba(0, 0, 0, 0.1)",
                            "0 1px 1px rgba(0, 0, 0, 0.06)"
                        ],
                        "md": [
                            "0 4px 3px rgba(0, 0, 0, 0.07)",
                            "0 2px 2px rgba(0, 0, 0, 0.06)"
                        ],
                        "lg": [
                            "0 10px 8px rgba(0, 0, 0, 0.04)",
                            "0 4px 3px rgba(0, 0, 0, 0.1)"
                        ],
                        "xl": [
                            "0 20px 13px rgba(0, 0, 0, 0.03)",
                            "0 8px 5px rgba(0, 0, 0, 0.08)"
                        ],
                        "2xl": "0 25px 25px rgba(0, 0, 0, 0.15)",
                        "none": "0 0 #0000"
                    },
                    "fill": {
                        "current": "currentColor"
                    },
                    "grayscale": {
                        "0": "0",
                        "DEFAULT": "100%"
                    },
                    "hueRotate": {
                        "0": "0deg",
                        "15": "15deg",
                        "30": "30deg",
                        "60": "60deg",
                        "90": "90deg",
                        "180": "180deg",
                        "-180": "-180deg",
                        "-90": "-90deg",
                        "-60": "-60deg",
                        "-30": "-30deg",
                        "-15": "-15deg"
                    },
                    "invert": {
                        "0": "0",
                        "DEFAULT": "100%"
                    },
                    "flex": {
                        "1": "1 1 0%",
                        "auto": "1 1 auto",
                        "initial": "0 1 auto",
                        "none": "none"
                    },
                    "flexGrow": {
                        "0": "0",
                        "DEFAULT": "1"
                    },
                    "flexShrink": {
                        "0": "0",
                        "DEFAULT": "1"
                    },
                    "fontFamily": {
                        "heading": [
                            "Sora",
                            "ui-sans-serif",
                            "system-ui",
                            "-apple-system",
                            "BlinkMacSystemFont",
                            "\"Segoe UI\"",
                            "Roboto",
                            "\"Helvetica Neue\"",
                            "Arial",
                            "\"Noto Sans\"",
                            "sans-serif",
                            "\"Apple Color Emoji\"",
                            "\"Segoe UI Emoji\"",
                            "\"Segoe UI Symbol\"",
                            "\"Noto Color Emoji\""
                        ],
                        "body": [
                            "Sora",
                            "ui-sans-serif",
                            "system-ui",
                            "-apple-system",
                            "BlinkMacSystemFont",
                            "\"Segoe UI\"",
                            "Roboto",
                            "\"Helvetica Neue\"",
                            "Arial",
                            "\"Noto Sans\"",
                            "sans-serif",
                            "\"Apple Color Emoji\"",
                            "\"Segoe UI Emoji\"",
                            "\"Segoe UI Symbol\"",
                            "\"Noto Color Emoji\""
                        ],
                        "sans": [
                            "Sora",
                            "ui-sans-serif",
                            "system-ui",
                            "-apple-system",
                            "BlinkMacSystemFont",
                            "\"Segoe UI\"",
                            "Roboto",
                            "\"Helvetica Neue\"",
                            "Arial",
                            "\"Noto Sans\"",
                            "sans-serif",
                            "\"Apple Color Emoji\"",
                            "\"Segoe UI Emoji\"",
                            "\"Segoe UI Symbol\"",
                            "\"Noto Color Emoji\""
                        ],
                        "serif": [
                            "Playfair Display",
                            "ui-serif",
                            "Georgia",
                            "Cambria",
                            "\"Times New Roman\"",
                            "Times",
                            "serif"
                        ],
                        "mono": [
                            "ui-monospace",
                            "SFMono-Regular",
                            "Menlo",
                            "Monaco",
                            "Consolas",
                            "\"Liberation Mono\"",
                            "\"Courier New\"",
                            "monospace"
                        ]
                    },
                    "fontSize": {
                        "xs": [
                            "0.75rem",
                            {
                                "lineHeight": "1.5"
                            }
                        ],
                        "sm": [
                            "0.875rem",
                            {
                                "lineHeight": "1.5"
                            }
                        ],
                        "base": [
                            "1rem",
                            {
                                "lineHeight": "1.5"
                            }
                        ],
                        "lg": [
                            "1.125rem",
                            {
                                "lineHeight": "1.5"
                            }
                        ],
                        "xl": [
                            "1.25rem",
                            {
                                "lineHeight": "2"
                            }
                        ],
                        "2xl": [
                            "1.5rem",
                            {
                                "lineHeight": "2"
                            }
                        ],
                        "3xl": [
                            "1.875rem",
                            {
                                "lineHeight": "2"
                            }
                        ],
                        "4xl": [
                            "2.25rem",
                            {
                                "lineHeight": "1.25"
                            }
                        ],
                        "5xl": [
                            "3rem",
                            {
                                "lineHeight": "1.5"
                            }
                        ],
                        "6xl": [
                            "3.75rem",
                            {
                                "lineHeight": "1"
                            }
                        ],
                        "7xl": [
                            "4.5rem",
                            {
                                "lineHeight": "1"
                            }
                        ],
                        "8xl": [
                            "5rem",
                            {
                                "lineHeight": "1"
                            }
                        ],
                        "9xl": [
                            "5.5rem",
                            {
                                "lineHeight": "1"
                            }
                        ],
                        "10xl": [
                            "6rem",
                            {
                                "lineHeight": "1"
                            }
                        ],
                        "11xl": [
                            "8rem",
                            {
                                "lineHeight": "1"
                            }
                        ],
                        "12xl": [
                            "9.75rem",
                            {
                                "lineHeight": "1"
                            }
                        ]
                    },
                    "fontWeight": {
                        "thin": "100",
                        "extralight": "200",
                        "light": "300",
                        "normal": "400",
                        "medium": "500",
                        "semibold": "600",
                        "bold": "700",
                        "extrabold": "800",
                        "black": "900"
                    },
                    "gridAutoColumns": {
                        "auto": "auto",
                        "min": "min-content",
                        "max": "max-content",
                        "fr": "minmax(0, 1fr)"
                    },
                    "gridAutoRows": {
                        "auto": "auto",
                        "min": "min-content",
                        "max": "max-content",
                        "fr": "minmax(0, 1fr)"
                    },
                    "gridColumn": {
                        "auto": "auto",
                        "span-1": "span 1 / span 1",
                        "span-2": "span 2 / span 2",
                        "span-3": "span 3 / span 3",
                        "span-4": "span 4 / span 4",
                        "span-5": "span 5 / span 5",
                        "span-6": "span 6 / span 6",
                        "span-7": "span 7 / span 7",
                        "span-8": "span 8 / span 8",
                        "span-9": "span 9 / span 9",
                        "span-10": "span 10 / span 10",
                        "span-11": "span 11 / span 11",
                        "span-12": "span 12 / span 12",
                        "span-full": "1 / -1"
                    },
                    "gridColumnEnd": {
                        "1": "1",
                        "2": "2",
                        "3": "3",
                        "4": "4",
                        "5": "5",
                        "6": "6",
                        "7": "7",
                        "8": "8",
                        "9": "9",
                        "10": "10",
                        "11": "11",
                        "12": "12",
                        "13": "13",
                        "auto": "auto"
                    },
                    "gridColumnStart": {
                        "1": "1",
                        "2": "2",
                        "3": "3",
                        "4": "4",
                        "5": "5",
                        "6": "6",
                        "7": "7",
                        "8": "8",
                        "9": "9",
                        "10": "10",
                        "11": "11",
                        "12": "12",
                        "13": "13",
                        "auto": "auto"
                    },
                    "gridRow": {
                        "auto": "auto",
                        "span-1": "span 1 / span 1",
                        "span-2": "span 2 / span 2",
                        "span-3": "span 3 / span 3",
                        "span-4": "span 4 / span 4",
                        "span-5": "span 5 / span 5",
                        "span-6": "span 6 / span 6",
                        "span-full": "1 / -1"
                    },
                    "gridRowStart": {
                        "1": "1",
                        "2": "2",
                        "3": "3",
                        "4": "4",
                        "5": "5",
                        "6": "6",
                        "7": "7",
                        "auto": "auto"
                    },
                    "gridRowEnd": {
                        "1": "1",
                        "2": "2",
                        "3": "3",
                        "4": "4",
                        "5": "5",
                        "6": "6",
                        "7": "7",
                        "auto": "auto"
                    },
                    "gridTemplateColumns": {
                        "1": "repeat(1, minmax(0, 1fr))",
                        "2": "repeat(2, minmax(0, 1fr))",
                        "3": "repeat(3, minmax(0, 1fr))",
                        "4": "repeat(4, minmax(0, 1fr))",
                        "5": "repeat(5, minmax(0, 1fr))",
                        "6": "repeat(6, minmax(0, 1fr))",
                        "7": "repeat(7, minmax(0, 1fr))",
                        "8": "repeat(8, minmax(0, 1fr))",
                        "9": "repeat(9, minmax(0, 1fr))",
                        "10": "repeat(10, minmax(0, 1fr))",
                        "11": "repeat(11, minmax(0, 1fr))",
                        "12": "repeat(12, minmax(0, 1fr))",
                        "none": "none"
                    },
                    "gridTemplateRows": {
                        "1": "repeat(1, minmax(0, 1fr))",
                        "2": "repeat(2, minmax(0, 1fr))",
                        "3": "repeat(3, minmax(0, 1fr))",
                        "4": "repeat(4, minmax(0, 1fr))",
                        "5": "repeat(5, minmax(0, 1fr))",
                        "6": "repeat(6, minmax(0, 1fr))",
                        "none": "none"
                    },
                    "keyframes": {
                        "spin": {
                            "to": {
                                "transform": "rotate(360deg)"
                            }
                        },
                        "ping": {
                            "75%, 100%": {
                                "transform": "scale(2)",
                                "opacity": "0"
                            }
                        },
                        "pulse": {
                            "50%": {
                                "opacity": ".5"
                            }
                        },
                        "bounce": {
                            "0%, 100%": {
                                "transform": "translateY(-25%)",
                                "animationTimingFunction": "cubic-bezier(0.8,0,1,1)"
                            },
                            "50%": {
                                "transform": "none",
                                "animationTimingFunction": "cubic-bezier(0,0,0.2,1)"
                            }
                        }
                    },
                    "letterSpacing": {
                        "tighter": "-0.05em",
                        "tight": "-0.025em",
                        "normal": "0em",
                        "wide": "0.025em",
                        "wider": "0.05em",
                        "widest": "0.1em",
                        "px": "1px",
                        "px-n": "-1px",
                        "px-2n": "-2px"
                    },
                    "lineHeight": {
                        "3": ".75rem",
                        "4": "1rem",
                        "5": "1.25rem",
                        "6": "1.5rem",
                        "7": "1.75rem",
                        "8": "2rem",
                        "9": "2.25rem",
                        "10": "2.5rem",
                        "none": "1",
                        "tight": "1.25",
                        "snug": "1.375",
                        "normal": "1.5",
                        "relaxed": "1.625",
                        "loose": "2"
                    },
                    "listStyleType": {
                        "none": "none",
                        "disc": "disc",
                        "decimal": "decimal"
                    },
                    "minHeight": {
                        "0": "0px",
                        "full": "100%",
                        "screen": "100vh"
                    },
                    "minWidth": {
                        "0": "0px",
                        "full": "100%",
                        "min": "min-content",
                        "max": "max-content"
                    },
                    "objectPosition": {
                        "bottom": "bottom",
                        "center": "center",
                        "left": "left",
                        "left-bottom": "left bottom",
                        "left-top": "left top",
                        "right": "right",
                        "right-bottom": "right bottom",
                        "right-top": "right top",
                        "top": "top"
                    },
                    "opacity": {
                        "0": "0",
                        "5": "0.05",
                        "10": "0.1",
                        "20": "0.2",
                        "25": "0.25",
                        "30": "0.3",
                        "40": "0.4",
                        "50": "0.5",
                        "60": "0.6",
                        "70": "0.7",
                        "75": "0.75",
                        "80": "0.8",
                        "90": "0.9",
                        "95": "0.95",
                        "100": "1"
                    },
                    "order": {
                        "1": "1",
                        "2": "2",
                        "3": "3",
                        "4": "4",
                        "5": "5",
                        "6": "6",
                        "7": "7",
                        "8": "8",
                        "9": "9",
                        "10": "10",
                        "11": "11",
                        "12": "12",
                        "first": "-9999",
                        "last": "9999",
                        "none": "0"
                    },
                    "outline": {
                        "none": [
                            "2px solid transparent",
                            "2px"
                        ],
                        "white": [
                            "2px dotted white",
                            "2px"
                        ],
                        "black": [
                            "2px dotted black",
                            "2px"
                        ]
                    },
                    "ringOffsetWidth": {
                        "0": "0px",
                        "1": "1px",
                        "2": "2px",
                        "4": "4px",
                        "8": "8px"
                    },
                    "ringWidth": {
                        "0": "0px",
                        "1": "1px",
                        "2": "2px",
                        "4": "4px",
                        "8": "8px",
                        "DEFAULT": "3px"
                    },
                    "rotate": {
                        "0": "0deg",
                        "1": "1deg",
                        "2": "2deg",
                        "3": "3deg",
                        "6": "6deg",
                        "12": "12deg",
                        "45": "45deg",
                        "90": "90deg",
                        "180": "180deg",
                        "-180": "-180deg",
                        "-90": "-90deg",
                        "-45": "-45deg",
                        "-12": "-12deg",
                        "-6": "-6deg",
                        "-3": "-3deg",
                        "-2": "-2deg",
                        "-1": "-1deg"
                    },
                    "saturate": {
                        "0": "0",
                        "50": ".5",
                        "100": "1",
                        "150": "1.5",
                        "200": "2"
                    },
                    "scale": {
                        "0": "0",
                        "50": ".5",
                        "75": ".75",
                        "90": ".9",
                        "95": ".95",
                        "100": "1",
                        "105": "1.05",
                        "110": "1.1",
                        "125": "1.25",
                        "150": "1.5"
                    },
                    "sepia": {
                        "0": "0",
                        "DEFAULT": "100%"
                    },
                    "skew": {
                        "0": "0deg",
                        "1": "1deg",
                        "2": "2deg",
                        "3": "3deg",
                        "6": "6deg",
                        "12": "12deg",
                        "-12": "-12deg",
                        "-6": "-6deg",
                        "-3": "-3deg",
                        "-2": "-2deg",
                        "-1": "-1deg"
                    },
                    "stroke": {
                        "current": "currentColor"
                    },
                    "strokeWidth": [
                        "0",
                        "1",
                        "2"
                    ],
                    "transformOrigin": {
                        "center": "center",
                        "top": "top",
                        "top-right": "top right",
                        "right": "right",
                        "bottom-right": "bottom right",
                        "bottom": "bottom",
                        "bottom-left": "bottom left",
                        "left": "left",
                        "top-left": "top left"
                    },
                    "transitionDelay": {
                        "75": "75ms",
                        "100": "100ms",
                        "150": "150ms",
                        "200": "200ms",
                        "300": "300ms",
                        "500": "500ms",
                        "700": "700ms",
                        "1000": "1000ms"
                    },
                    "transitionDuration": {
                        "75": "75ms",
                        "100": "100ms",
                        "150": "150ms",
                        "200": "200ms",
                        "300": "300ms",
                        "500": "500ms",
                        "700": "700ms",
                        "1000": "1000ms",
                        "DEFAULT": "150ms"
                    },
                    "transitionProperty": {
                        "none": "none",
                        "all": "all",
                        "DEFAULT": "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                        "colors": "background-color, border-color, color, fill, stroke",
                        "opacity": "opacity",
                        "shadow": "box-shadow",
                        "transform": "transform"
                    },
                    "transitionTimingFunction": {
                        "DEFAULT": "cubic-bezier(0.4, 0, 0.2, 1)",
                        "linear": "linear",
                        "in": "cubic-bezier(0.4, 0, 1, 1)",
                        "out": "cubic-bezier(0, 0, 0.2, 1)",
                        "in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
                    },
                    "zIndex": {
                        "0": "0",
                        "10": "10",
                        "20": "20",
                        "30": "30",
                        "40": "40",
                        "50": "50",
                        "auto": "auto"
                    }
                }
            }
        }
    ],
    "content": [],
    "plugins": []
}
