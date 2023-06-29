/**
 * Embed Player
 * @author codenamenina
 */

if (typeof(EMBED) == 'undefined'){
    EMBED = {};
}

/** config_values */
EMBED_CSSHOST = "//localhost/v6.5/vendor/audio/"; //script will load a css file called "embed.css" from this folder
EMBED_WEBSITE = "//localhost/v6.5/vendor";
//EMBED_CSSHOST = "//beta.ebravo.pk/vendor/audio/"; //script will load a css file called "embed.css" from this folder
//EMBED_WEBSITE = "//beta.ebravo.pk/vendor/audio/";
EMBED_REF_FROM = "?from=embed";
EMBED_PRELOAD_URL = "";
EMBED_INPAGE_AUDIO = true;
EMBED_SOUNDCLOUD_CLIENT_ID = "";

/** Credit to Google Material Design Icon */

/** Icon set use SVG to display icon */

EMBED.ICONSET = [];

EMBED.ICONSET["radius"] = {
    'play': '<svg id="embed_icon_play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 232.153 232.153"><path d="M203.791,99.628L49.307,2.294c-4.567-2.719-10.238-2.266-14.521-2.266   c-17.132,0-17.056,13.227-17.056,16.578v198.94c0,2.833-0.075,16.579,17.056,16.579c4.283,0,9.955,0.451,14.521-2.267   l154.483-97.333c12.68-7.545,10.489-16.449,10.489-16.449S216.471,107.172,203.791,99.628z"></path></svg>',
    'pause': '<svg id="embed_icon_pause" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 232.679 232.679" xml:space="preserve"><path style="fill-rule:evenodd;clip-rule:evenodd;" d="M80.543,0H35.797c-9.885,0-17.898,8.014-17.898,17.898v196.883   c0,9.885,8.013,17.898,17.898,17.898h44.746c9.885,0,17.898-8.013,17.898-17.898V17.898C98.44,8.014,90.427,0,80.543,0z M196.882,0   h-44.746c-9.886,0-17.899,8.014-17.899,17.898v196.883c0,9.885,8.013,17.898,17.899,17.898h44.746   c9.885,0,17.898-8.013,17.898-17.898V17.898C214.781,8.014,206.767,0,196.882,0z"></path></svg>',
    'prev': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 205.857 205.857" xml:space="preserve"><path d="M179.417,0.025c-3.265,0-7.59-0.401-11.071,2.005L76.082,79.939V17.924   c0-9.886-8.013-17.899-17.898-17.899H31.335c-9.884,0-17.898,8.013-17.898,17.899v170.035c0,9.885,8.014,17.898,17.898,17.898   h26.849c9.885,0,17.898-8.013,17.898-17.898v-62.533l92.264,77.91c3.481,2.405,7.806,2.004,11.071,2.004   c13.062,0,13.004-11.7,13.004-14.666V14.691C192.42,12.184,192.478,0.025,179.417,0.025z"></path></svg>',
    'next': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 205.857 205.857" xml:space="preserve"><path d="M174.522,0h-26.848c-9.885,0-17.897,8.013-17.897,17.899v62.533   L37.513,2.522c-3.483-2.406-7.807-2.005-11.072-2.005c-13.061,0-13.004,11.7-13.004,14.666v175.983   c0,2.507-0.057,14.666,13.004,14.666c3.265,0,7.589,0.401,11.072-2.005l92.265-77.91v62.016c0,9.885,8.012,17.898,17.897,17.898   h26.848c9.885,0,17.898-8.013,17.898-17.898V17.899C192.421,8.013,184.408,0,174.522,0z"></path></svg>',
    'volume_on': '<svg id="embed_volume_on" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.026 52.026" xml:space="preserve"><path d="M26.894,3.013c-0.551,0-1.097,0.153-1.579,0.444c-0.046,0.027-0.09,0.059-0.13,0.093L11.634,15.013H1c-0.553,0-1,0.447-1,1   v19c0,0.553,0.447,1,1,1h10.61l13.543,12.436c0.05,0.046,0.104,0.086,0.161,0.12c0.482,0.291,1.028,0.444,1.579,0.444   c1.713,0,3.106-1.416,3.106-3.156V6.169C30,4.429,28.606,3.013,26.894,3.013z M13,34.013c0,0.553-0.447,1-1,1s-1-0.447-1-1v-4   c0-0.553,0.447-1,1-1s1,0.447,1,1V34.013z M13,21.013c0,0.553-0.447,1-1,1s-1-0.447-1-1v-4c0-0.553,0.447-1,1-1s1,0.447,1,1V21.013   z"></path><path d="M38.797,7.066c-0.523-0.177-1.091,0.103-1.269,0.626c-0.177,0.522,0.103,1.091,0.626,1.269   c7.101,2.411,11.872,9.063,11.872,16.553c0,7.483-4.762,14.136-11.849,16.554c-0.522,0.178-0.802,0.746-0.623,1.27   c0.142,0.415,0.53,0.677,0.946,0.677c0.107,0,0.216-0.017,0.323-0.054c7.896-2.693,13.202-10.106,13.202-18.446   C52.026,17.167,46.71,9.753,38.797,7.066z"></path><path d="M43.026,25.513c0-5.972-4.009-11.302-9.749-12.962c-0.533-0.151-1.084,0.152-1.238,0.684   c-0.153,0.53,0.152,1.085,0.684,1.238c4.889,1.413,8.304,5.953,8.304,11.04s-3.415,9.627-8.304,11.04   c-0.531,0.153-0.837,0.708-0.684,1.238c0.127,0.438,0.526,0.723,0.961,0.723c0.092,0,0.185-0.013,0.277-0.039   C39.018,36.815,43.026,31.485,43.026,25.513z"></path></svg>',
    'volume_off': '<svg id="embed_volume_off" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 54" style="enable-background:new 0 0 54 54;"><path d="M46.414,26l7.293-7.293c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0L45,24.586l-7.293-7.293   c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L43.586,26l-7.293,7.293c-0.391,0.391-0.391,1.023,0,1.414   C36.488,34.902,36.744,35,37,35s0.512-0.098,0.707-0.293L45,27.414l7.293,7.293C52.488,34.902,52.744,35,53,35   s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L46.414,26z"></path><path d="M26.894,4c-0.551,0-1.097,0.153-1.579,0.444c-0.046,0.027-0.09,0.059-0.13,0.093L11.634,16H1c-0.553,0-1,0.447-1,1v19   c0,0.553,0.447,1,1,1h10.61l13.543,12.436c0.05,0.046,0.104,0.086,0.161,0.12C25.797,49.847,26.343,50,26.894,50   C28.606,50,30,48.584,30,46.844V7.156C30,5.416,28.606,4,26.894,4z M13,35c0,0.553-0.447,1-1,1s-1-0.447-1-1v-4   c0-0.553,0.447-1,1-1s1,0.447,1,1V35z M13,22c0,0.553-0.447,1-1,1s-1-0.447-1-1v-4c0-0.553,0.447-1,1-1s1,0.447,1,1V22z"></path></svg>',
    'list_arrow': '<svg height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M2 17.414L.586 16l7-7-7-7L2 .586 10.414 9z"></path><path d="M7 17.414L5.586 16l7-7-7-7L7 .586 15.414 9z"></path></svg>',
    'repeat_one': '<svg id="embed_icon_repeat_one" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256c0 88.224-71.775 160-160 160H170.067l34.512 32.419c9.875 9.276 10.119 24.883.539 34.464l-10.775 10.775c-9.373 9.372-24.568 9.372-33.941 0l-92.686-92.686c-9.373-9.373-9.373-24.568 0-33.941l80.269-80.27c9.373-9.373 24.568-9.373 33.941 0l10.775 10.775c9.581 9.581 9.337 25.187-.539 34.464l-22.095 20H352c52.935 0 96-43.065 96-96 0-13.958-2.996-27.228-8.376-39.204-4.061-9.039-2.284-19.626 4.723-26.633l12.183-12.183c11.499-11.499 30.965-8.526 38.312 5.982C505.814 205.624 512 230.103 512 256zM72.376 295.204C66.996 283.228 64 269.958 64 256c0-52.935 43.065-96 96-96h181.933l-22.095 20.002c-9.875 9.276-10.119 24.883-.539 34.464l10.775 10.775c9.373 9.372 24.568 9.372 33.941 0l80.269-80.27c9.373-9.373 9.373-24.568 0-33.941l-92.686-92.686c-9.373-9.373-24.568-9.373-33.941 0l-10.775 10.775c-9.581 9.581-9.337 25.187.539 34.464L341.933 96H160C71.775 96 0 167.776 0 256c0 25.897 6.186 50.376 17.157 72.039 7.347 14.508 26.813 17.481 38.312 5.982l12.183-12.183c7.008-7.008 8.786-17.595 4.724-26.634zm154.887 4.323c0-7.477 3.917-11.572 11.573-11.572h15.131v-39.878c0-5.163.534-10.503.534-10.503h-.356s-1.779 2.67-2.848 3.738c-4.451 4.273-10.504 4.451-15.666-1.068l-5.518-6.231c-5.342-5.341-4.984-11.216.534-16.379l21.72-19.939c4.449-4.095 8.366-5.697 14.42-5.697h12.105c7.656 0 11.749 3.916 11.749 11.572v84.384h15.488c7.655 0 11.572 4.094 11.572 11.572v8.901c0 7.477-3.917 11.572-11.572 11.572h-67.293c-7.656 0-11.573-4.095-11.573-11.572v-8.9z" class=""></path></svg>',
    'repeat_all': '<svg id="embed_icon_repeat_all" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256c0 88.224-71.775 160-160 160H170.067l34.512 32.419c9.875 9.276 10.119 24.883.539 34.464l-10.775 10.775c-9.373 9.372-24.568 9.372-33.941 0l-92.686-92.686c-9.373-9.373-9.373-24.568 0-33.941l92.686-92.686c9.373-9.373 24.568-9.373 33.941 0l10.775 10.775c9.581 9.581 9.337 25.187-.539 34.464L170.067 352H352c52.935 0 96-43.065 96-96 0-13.958-2.996-27.228-8.376-39.204-4.061-9.039-2.284-19.626 4.723-26.633l12.183-12.183c11.499-11.499 30.965-8.526 38.312 5.982C505.814 205.624 512 230.103 512 256zM72.376 295.204C66.996 283.228 64 269.958 64 256c0-52.935 43.065-96 96-96h181.933l-34.512 32.419c-9.875 9.276-10.119 24.883-.539 34.464l10.775 10.775c9.373 9.372 24.568 9.372 33.941 0l92.686-92.686c9.373-9.373 9.373-24.568 0-33.941l-92.686-92.686c-9.373-9.373-24.568-9.373-33.941 0L306.882 29.12c-9.581 9.581-9.337 25.187.539 34.464L341.933 96H160C71.775 96 0 167.776 0 256c0 25.897 6.186 50.376 17.157 72.039 7.347 14.508 26.813 17.481 38.312 5.982l12.183-12.183c7.008-7.008 8.786-17.595 4.724-26.634z" class=""></path></svg>',
    'shuffle': '<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xml:space="preserve"><path d="M506.603,372.477l-96-80c-4.471-3.726-10.692-4.53-15.965-2.061C389.367,292.885,386,298.18,386,304v33h-49    c-44.448,0-82-37.093-82-81c0-38.526-12.121-74.858-35.012-105.016C187.031,107.162,134.699,81,80,81H47    c-25.916,0-47,21.084-47,47s21.084,47,47,47h33c44.664,0,81,36.336,81,81c0,38.526,12.121,74.858,35.012,105.016    C228.969,404.838,281.675,431,337,431h49v33c0,5.821,3.367,11.115,8.638,13.584c2.03,0.951,4.201,1.416,6.359,1.416    c3.445,0,6.857-1.186,9.606-3.477l96-80c3.419-2.85,5.397-7.072,5.397-11.523C512,379.549,510.023,375.327,506.603,372.477z"></path><path d="M172.077,379.103c-15.441-20.357-26.69-43.074-33.475-67.273C123.839,327.319,103.036,337,80,337H47    c-25.916,0-47,21.084-47,47s21.084,47,47,47h33c38.359,0,75.543-12.88,105.708-35.68    C180.906,390.171,176.343,384.771,172.077,379.103z"></path><path d="M506.603,116.477l-96-80c-4.471-3.726-10.691-4.53-15.965-2.061C389.367,36.885,386,42.18,386,48v33h-49    c-38.818,0-76.337,12.895-106.66,35.717c4.784,5.142,9.333,10.533,13.592,16.192c15.579,20.542,26.89,43.488,33.653,67.935    C292.657,185.043,313.889,175,337,175h49v33c0,5.82,3.367,11.115,8.638,13.584c5.271,2.468,11.494,1.665,15.965-2.061l96-80    c3.42-2.85,5.397-7.072,5.397-11.523C512,123.549,510.022,119.327,506.603,116.477z"></path></svg>',
    'arrow': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46.02 46.02" xml:space="preserve"><path d="M14.757,46.02c-1.412,0-2.825-0.521-3.929-1.569c-2.282-2.17-2.373-5.78-0.204-8.063l12.758-13.418L10.637,9.645    C8.46,7.37,8.54,3.76,10.816,1.582c2.277-2.178,5.886-2.097,8.063,0.179l16.505,17.253c2.104,2.2,2.108,5.665,0.013,7.872    L18.893,44.247C17.77,45.424,16.267,46.02,14.757,46.02z"></path></svg>'
}

EMBED.ICONSET["material"] = {
    'play': '<svg id="embed_icon_play"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 298.667 298.667" xml:space="preserve"><polygon points="32,0 32,298.667 266.667,149.333"></polygon></svg>',
    'pause': '<svg id="embed_icon_pause" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 357 357"><path d="M25.5,357h102V0h-102V357z M229.5,0v357h102V0H229.5z"></path></svg>',
    'prev': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 306 306" xml:space="preserve"><rect width="51" height="306"></rect><polygon points="89.25,153 306,306 306,0"></polygon></svg>',
    'next': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 306 306" xml:space="preserve"><path d="M0,306l216.75-153L0,0V306z M255,0v306h51V0H255z"></path></svg>',
    'volume_on': '<svg id="embed_volume_on" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.026 52.026" xml:space="preserve"><path d="M26.894,3.013c-0.551,0-1.097,0.153-1.579,0.444c-0.046,0.027-0.09,0.059-0.13,0.093L11.634,15.013H1c-0.553,0-1,0.447-1,1   v19c0,0.553,0.447,1,1,1h10.61l13.543,12.436c0.05,0.046,0.104,0.086,0.161,0.12c0.482,0.291,1.028,0.444,1.579,0.444   c1.713,0,3.106-1.416,3.106-3.156V6.169C30,4.429,28.606,3.013,26.894,3.013z M13,34.013c0,0.553-0.447,1-1,1s-1-0.447-1-1v-4   c0-0.553,0.447-1,1-1s1,0.447,1,1V34.013z M13,21.013c0,0.553-0.447,1-1,1s-1-0.447-1-1v-4c0-0.553,0.447-1,1-1s1,0.447,1,1V21.013   z"></path><path d="M38.797,7.066c-0.523-0.177-1.091,0.103-1.269,0.626c-0.177,0.522,0.103,1.091,0.626,1.269   c7.101,2.411,11.872,9.063,11.872,16.553c0,7.483-4.762,14.136-11.849,16.554c-0.522,0.178-0.802,0.746-0.623,1.27   c0.142,0.415,0.53,0.677,0.946,0.677c0.107,0,0.216-0.017,0.323-0.054c7.896-2.693,13.202-10.106,13.202-18.446   C52.026,17.167,46.71,9.753,38.797,7.066z"></path><path d="M43.026,25.513c0-5.972-4.009-11.302-9.749-12.962c-0.533-0.151-1.084,0.152-1.238,0.684   c-0.153,0.53,0.152,1.085,0.684,1.238c4.889,1.413,8.304,5.953,8.304,11.04s-3.415,9.627-8.304,11.04   c-0.531,0.153-0.837,0.708-0.684,1.238c0.127,0.438,0.526,0.723,0.961,0.723c0.092,0,0.185-0.013,0.277-0.039   C39.018,36.815,43.026,31.485,43.026,25.513z"></path></svg>',
    'volume_off': '<svg id="embed_volume_off" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 54" style="enable-background:new 0 0 54 54;"><path d="M46.414,26l7.293-7.293c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0L45,24.586l-7.293-7.293   c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L43.586,26l-7.293,7.293c-0.391,0.391-0.391,1.023,0,1.414   C36.488,34.902,36.744,35,37,35s0.512-0.098,0.707-0.293L45,27.414l7.293,7.293C52.488,34.902,52.744,35,53,35   s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L46.414,26z"></path><path d="M26.894,4c-0.551,0-1.097,0.153-1.579,0.444c-0.046,0.027-0.09,0.059-0.13,0.093L11.634,16H1c-0.553,0-1,0.447-1,1v19   c0,0.553,0.447,1,1,1h10.61l13.543,12.436c0.05,0.046,0.104,0.086,0.161,0.12C25.797,49.847,26.343,50,26.894,50   C28.606,50,30,48.584,30,46.844V7.156C30,5.416,28.606,4,26.894,4z M13,35c0,0.553-0.447,1-1,1s-1-0.447-1-1v-4   c0-0.553,0.447-1,1-1s1,0.447,1,1V35z M13,22c0,0.553-0.447,1-1,1s-1-0.447-1-1v-4c0-0.553,0.447-1,1-1s1,0.447,1,1V22z"></path></svg>',
    'list_arrow': '<svg height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M2 17.414L.586 16l7-7-7-7L2 .586 10.414 9z"></path><path d="M7 17.414L5.586 16l7-7-7-7L7 .586 15.414 9z"></path></svg>',
    'repeat_one': '<svg id="embed_icon_repeat_one" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 426.667 426.667"><polygon points="106.667,106.667 320,106.667 320,170.667 405.333,85.333 320,0 320,64 64,64 64,192 106.667,192"></polygon><polygon points="234.667,277.333 234.667,149.333 213.333,149.333 170.667,170.667 170.667,192 202.667,192 202.667,277.333"></polygon><polygon points="320,320 106.667,320 106.667,256 21.333,341.333 106.667,426.667 106.667,362.667 362.667,362.667      362.667,234.667 320,234.667"></polygon></svg>',
    'repeat_all': '<svg id="embed_icon_repeat_all" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 426.667 426.667"><polygon points="320,320 106.667,320 106.667,256 21.333,341.333 106.667,426.667 106.667,362.667 362.667,362.667      362.667,234.667 320,234.667"></polygon><polygon points="106.667,106.667 320,106.667 320,170.667 405.333,85.333 320,0 320,64 64,64 64,192 106.667,192"></polygon></svg>',
    'shuffle': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M506.24,371.7l-96-80c-4.768-4-11.424-4.8-17.024-2.208c-5.632,2.656-9.216,8.288-9.216,14.496v48h-32l-182.4-243.2    c-6.048-8.064-15.52-12.8-25.6-12.8H16c-8.832,0-16,7.168-16,16v32c0,8.832,7.168,16,16,16h112l182.432,243.2    c6.016,8.064,15.52,12.8,25.568,12.8h48v48c0,6.208,3.584,11.84,9.216,14.496c2.144,0.992,4.48,1.504,6.784,1.504    c3.68,0,7.328-1.248,10.24-3.712l96-80c3.68-3.04,5.76-7.552,5.76-12.288C512,379.252,509.92,374.74,506.24,371.7z"></path><path d="M506.24,115.7l-96-80c-4.768-3.968-11.424-4.8-17.024-2.176C387.584,36.116,384,41.78,384,47.988v48h-48    c-10.08,0-19.552,4.736-25.6,12.8l-50.4,67.2l40,53.344l52-69.344h32v48c0,6.208,3.584,11.872,9.216,14.496    c2.144,0.992,4.48,1.504,6.784,1.504c3.68,0,7.328-1.28,10.24-3.712l96-80c3.68-3.04,5.76-7.552,5.76-12.288    C512,123.252,509.92,118.74,506.24,115.7z"></path><path d="M180,282.676l-52,69.312H16c-8.832,0-16,7.168-16,16v32c0,8.832,7.168,16,16,16h127.968c10.08,0,19.584-4.736,25.632-12.8    l50.4-67.2L180,282.676z"></path></svg>',
    'arrow': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 284.936 284.936"><path d="M277.515,135.9L144.464,2.857C142.565,0.955,140.375,0,137.9,0c-2.472,0-4.659,0.955-6.562,2.857l-14.277,14.275    c-1.903,1.903-2.853,4.089-2.853,6.567c0,2.478,0.95,4.664,2.853,6.567l112.207,112.204L117.062,254.677    c-1.903,1.903-2.853,4.093-2.853,6.564c0,2.477,0.95,4.667,2.853,6.57l14.277,14.271c1.902,1.905,4.089,2.854,6.562,2.854    c2.478,0,4.665-0.951,6.563-2.854l133.051-133.044c1.902-1.902,2.851-4.093,2.851-6.567S279.417,137.807,277.515,135.9z"></path><path d="M170.732,142.471c0-2.474-0.947-4.665-2.857-6.571L34.833,2.857C32.931,0.955,30.741,0,28.267,0s-4.665,0.955-6.567,2.857    L7.426,17.133C5.52,19.036,4.57,21.222,4.57,23.7c0,2.478,0.95,4.664,2.856,6.567L119.63,142.471L7.426,254.677    c-1.906,1.903-2.856,4.093-2.856,6.564c0,2.477,0.95,4.667,2.856,6.57l14.273,14.271c1.903,1.905,4.093,2.854,6.567,2.854    s4.664-0.951,6.567-2.854l133.042-133.044C169.785,147.136,170.732,144.945,170.732,142.471z"></path></svg>'
}


EMBED.Playlist = [];
EMBED.OriginalPlaylist = [];
EMBED.Owner = null;
EMBED.QueryParams = {};
EMBED.PageHasSongs = false;
EMBED.Initialized = false;
EMBED.DOM_WINDOW = this;
EMBED.CurrentPlaylistPlayButton = null;
EMBED.CurrentSite = null;
EMBED.Init = function(shouldBuild){
    if (EMBED.Initialized == false){
        EMBED.Initialized = true;
        var scripts = document.getElementsByTagName("script");
        for (var i = 0; i < scripts.length; i++){
            var script = scripts[i];
            //if you changed js file name, please change this too
            if (script.src.indexOf('embed.js') != -1){
                EMBED.Utils.getQueryParams(script.src, EMBED.QueryParams);
            }
        }
        if (EMBED.QueryParams.autoplay && EMBED.QueryParams.autoplay == "true"){
            EMBED.Event.add(window, "embedPageHasSongs", EMBED.Autoplay);
        }
        //Build the player
        if (shouldBuild == true){
            EMBED.CSS.add();
            EMBED.CSS.add();
            EMBED.Event.add(window, "embedPageHasSongs", EMBED.Bottom.build);
            EMBED.Event.add(window, "embedPageHasSongs", EMBED.Bottom.attachEvents);
            if (EMBED.PageHasSongs == true){
                EMBED.Bottom.build(null, true);
            } else {
                EMBED.Bottom.build(null, false);
            }
        } else {
            EMBED.Event.add(window, "embedPageHasSongs", EMBED.Bottom.attachEvents);
            if (EMBED.PageHasSongs == true){
                EMBED.Bottom.attachEvents();
            }
        }
        if (EMBED.QueryParams.preload != undefined && EMBED.QueryParams.preload != "false"){
            EMBED.Preload.request();
        }
        if (EMBED.QueryParams.soundcloud != undefined && EMBED.QueryParams.soundcloud != "false"){
            EMBED.SoundCloud.request();
        }
        if(EMBED_INPAGE_AUDIO){
            //Start InPageAudio get have support HTML tag
            EMBED.InPageAudio.init();
        }
        EMBED.Event.fire(window, "embedPlayerInit");
        window.addEventListener('resize', function(){
            EMBED.Utils.setBufferedSize();
        });

    }
}
EMBED.Autoplay = function(){
    //Start player
    EMBED.Player.play(0);
}
EMBED.Reset = function(){
    EMBED.PlaylistObj.obj = {};
    EMBED.Playlist = [];
    EMBED.Player.loaded = false;
    EMBED.Bottom.controls.playPauseButton.showPlay();
}
EMBED.Preload = {
    request : function(){
        $.ajax({
            url: EMBED_PRELOAD_URL,
            dataType: 'jsonp',
            success:function(json){
                EMBED.Preload.response(json);
            },
            error:function(){
                console.log("Something wrong when fetching songs, please check preload.php url and config.");
            }
        });
    },
    response : function(json){
        if (json.success == true){
            var added = 0;
            var len = json.songs.length;
            for (var i = 0; i < len; i++){
                var song = json.songs[i];
                var position = EMBED.PlaylistObj.add(song, false);
                if (position != -1){
                    added++;
                }
            }
            if (added > 0){
                EMBED.PlaylistObj.done();
            }
        }
    }
}
EMBED.SoundCloud = {
    request : function(playlistId){
        var url;
        if(playlistId) url = "//api.soundcloud.com/playlists/" + playlistId + "?client_id=" + EMBED_SOUNDCLOUD_CLIENT_ID;
        else url = "//api.soundcloud.com/playlists/" + EMBED.QueryParams.playlist_id + "?client_id=" + EMBED_SOUNDCLOUD_CLIENT_ID;
        $.ajax({
            url: url,
            dataType: 'jsonp',
            success:function(json){
                EMBED.SoundCloud.response(json);
            },
            error:function(){
                console.log("Something wrong while fetching songs from SoundCloud, please check soundcloud API and playlist id.");
            }
        });
    },
    response : function(json){
        if (json.tracks && json.tracks.length){
            var added = 0;
            var len = json.tracks.length;
            for (var i = 0; i < len; i++){
                if(!json.tracks[i].title || !json.tracks[i].user.username || !json.tracks[i].stream_url) {
                    console.log("Soundcloud API! You are missing title or artist or audio url");
                    return;
                }
                var song = {
                    "id": json.tracks[i].id,
                    "title": json.tracks[i].title,
                    "shareurl": json.tracks[i].permalink_url,
                    "image": json.tracks[i].artwork_url,
                    "artisturl": json.tracks[i].user.permalink_url,
                    "songurl": json.tracks[i].permalink_url,
                    "artist": json.tracks[i].user.username,
                    "url": json.tracks[i].stream_url + "?client_id=" + EMBED_SOUNDCLOUD_CLIENT_ID,
                }
                var position = EMBED.PlaylistObj.add(song, false);
                if (position != -1){
                    added++;
                }
            }
            if (added > 0){
                EMBED.PlaylistObj.done();
            }
        }
    }
}
EMBED.InPageAudio = {
    init: function(){
        $(".embed_audio").on('click', function() {
            var song;
            var id = $(this).attr('id');
            var title = $(this).attr('title');
            var shareurl = $(this).attr('shareurl') || '';
            var image = $(this).attr('image') || '';
            var artisturl = $(this).attr('artisturl') || '';
            var albumurl = $(this).attr('albumurl') || '';
            var songurl = $(this).attr('songurl') || '';
            var album = $(this).attr('album') || '';
            var artist = $(this).attr('artist');
            var buy_link = $(this).attr('buy_link') || '';
            var url = $(this).attr('url');
            var favorite = $(this).attr('favorite') || '';
            if(!title || !artist || !url) {
                console.log("You are missing title or artist or audio url");
                return;
            }
            song = {
                "id": id,
                "title": title,
                "shareurl": shareurl,
                "image": image,
                "artisturl": artisturl,
                "albumurl": albumurl,
                "songurl": songurl,
                "album": album,
                "artist": artist,
                "buy_link": buy_link,
                "url": url,
                "favorite": favorite
            }
            EMBED.Player.addSong(song, true);
        });
    }
}
EMBED.PlaylistObj = {
    lastDone : null,
    obj : {},
    add : function(song){
        var r = -1;
        var songHash = $.md5(song.url);
        if (!EMBED.PlaylistObj.obj[songHash]){
            song.position = EMBED.Playlist.length;
            EMBED.Playlist.push(song);
            EMBED.PlaylistObj.obj[songHash] = song;
        } else {
            for (var i in EMBED.PlaylistObj.obj[songHash]){
                if (EMBED.PlaylistObj.obj[songHash][i] == null){
                    if (song[i] != null){
                        EMBED.PlaylistObj.obj[songHash][i] = song[i];
                    }
                }
            }
        }
        try {
            r = EMBED.PlaylistObj.obj[songHash].position;
        } catch(e){}
        return r;
    },
    done : function(){
        if (EMBED.Playlist.length > 0){
            EMBED.PageHasSongs = true;
            try {
                var listIcon = $("#embed_list_icon_badge");
                listIcon.html(EMBED.Playlist.length);
                EMBED.List.build();
            } catch(e){}
            EMBED.Event.fire(window, "embedPageHasSongs");
        }
    },
    remove : function(position){
        var song = EMBED.Playlist[position];
        var songHash = $.md5(song.url);
        delete EMBED.PlaylistObj.obj[songHash];
        EMBED.Playlist.splice(position, 1);
    },
    refresh : function(){

    }
}
EMBED.CSS = {
    added : false,
    add : function(){
        // import css
        if (typeof(EMBED_HAS_CSS) == "undefined" && EMBED.CSS.added == false){
            EMBED.CSS.added = true;
            $('<link/>', {
                rel: "stylesheet",
                type: "text/css",
                charset: "utf-8",
                href: EMBED_CSSHOST + "embed.css"
            }).appendTo('body');
        }
    }
}
var watchBuffer;
EMBED.Bottom = {
    built : false,
    full : false,
    fireShowFullDoneEvent : false,
    player : null,
    parentEl : null,
    eventsAttached : false,
    attachEvents : function(){
        if ( !EMBED.Bottom.eventsAttached ) {
            $("#embed_prev_button").bind("click", EMBED.Player.previous);
            $("#embed_play_button").bind("click", EMBED.Player.playPause);
            $("#embed_next_button").bind("click", EMBED.Player.next);
            var listIcon = $("#embed_list_icon");
            listIcon.bind("click", EMBED.List.icon.click);
            var largeShuffle = $("#embed_large_shuffle");
            largeShuffle.bind("click", EMBED.Player.shuffleToggled);
            var largeRepeat = $("#embed_large_repeat");
            largeRepeat.bind("click", EMBED.Player.repeatToggled);
            EMBED.Bottom.volume.speaker = $("#embed_volume_speaker");
            EMBED.Bottom.volume.speaker.bind("click", EMBED.Bottom.volume.speakerClick);
            EMBED.Bottom.volume.speaker.bind("mouseover", EMBED.Bottom.volume.mouseOverSpeaker);
            EMBED.Bottom.volume.speaker.bind("mouseout", EMBED.Bottom.volume.mouseOutSpeaker);

            $("#embed_display_progress").bind("click", EMBED.Bottom.seek.click);
            $("#embed_display_progressed").bind("click", EMBED.Bottom.seek.click);
            $("#embed_volume_back").bind("mouseover", EMBED.Bottom.volume.mouseOverBack);
            $("#embed_volume_back").bind("mouseout", EMBED.Bottom.volume.mouseOutBack);
            var largeShare = $("#embed_large_share");
            var shareIcons = $('.embed_song_action_share_icon');
            $("#embed_volume_slider").bind("click", EMBED.Bottom.volume.click);
            EMBED.Bottom.seek.thumb = $("#embed_display_seek_thumb");
            EMBED.Bottom.seek.thumb.bind("mousedown", EMBED.Bottom.seek.mouseDown);
            EMBED.Bottom.seek.thumb.bind("mouseup", EMBED.Bottom.seek.mouseUp);
            EMBED.Bottom.volume.thumb = $("#embed_volume_thumb");
            EMBED.Bottom.volume.thumb.bind("mousedown", EMBED.Bottom.volume.mouseDown);
            EMBED.Bottom.volume.thumb.bind("mouseup", EMBED.Bottom.volume.mouseUp);
            EMBED.Bottom.display.progressBar = $("#embed_display_progressed");
            $("#embed_bottom_player").removeClass("embed_before_load");
            EMBED.Bottom.display.showFirstSong();
            EMBED.Bottom.eventsAttached = true;
        }
    },
    build : function(e, shouldAttachEvents){
        /** Create elements use jQuery */
        var embedBottomPlayer = $("#embed_bottom_player");
        if (!embedBottomPlayer.length){
            var bottomPlayer = document.createElement("div");
            bottomPlayer.style.visibility = 'hidden';
            bottomPlayer.setAttribute("id", "embed_bottom_player");
            if (EMBED.QueryParams.skin != undefined){
                bottomPlayer.className = "init " + EMBED.QueryParams.skin + " embed_bottom_player_hidden embed_before_load";
            } else {
                bottomPlayer.className = "init embedplayer2 embed_bottom_player_hidden embed_before_load";
            }
            if (EMBED.QueryParams.bg_color != undefined){
                bottomPlayer.style.background = "#"+EMBED.QueryParams.bg_color;
            }
            var bottomControls = $('<div/>', {
                id: "embed_bottom_controls",
            }).appendTo(bottomPlayer);
            $('<div/>', {
                id: "embed_prev_button",
                class: "embed_controls_button",
            }).appendTo(bottomControls);
            $('<div/>', {
                id: "embed_play_button",
                title: "Click to play music",
                class: "embed_controls_button embed_play_button",
            }).appendTo(bottomControls);
            $('<div/>', {
                id: "embed_next_button",
                class: "embed_controls_button",
            }).appendTo(bottomControls);

            var listButton = $('<div/>', {
                id: "embed_list_icon",
            }).appendTo(bottomPlayer);

            var listButtonBadge = $('<div/>', {
                id: "embed_list_icon_badge",
            }).appendTo(listButton);

            if (EMBED.Playlist.length > 0){
                listButtonBadge.html(EMBED.Playlist.length);
            }
            $('<div/>', {
                id: "embed_large_shuffle",
            }).appendTo(bottomPlayer);

            $('<div/>', {
                id: "embed_large_repeat",
            }).appendTo(bottomPlayer);

            $('<div/>', {
                id: "embed_popout_button",
            }).appendTo(bottomPlayer);

            $('<div/>', {
                id: "embed_volume_speaker",
                class: "embed_volume_on"
            }).appendTo(bottomPlayer);
            var bottomDisplay = $('<div/>', {
                id: "embed_display",
                style: EMBED.QueryParams.display_color != undefined ? "background:" + "#" + EMBED.QueryParams.display_color : null
            }).appendTo(bottomPlayer);
            var bottomDisplaySongContainer = $('<div/>', {
                id: "embed_display_song_container",
            }).appendTo(bottomDisplay);

            $('<div/>', {
                id: "embed_coverart",
                class: "embed_hide_when_stopped"
            }).appendTo(bottomDisplaySongContainer);

            var bottomDisplayText = $('<div/>', {
                id: "embed_display_text",
                class: "embed_hide_when_stopped"
            }).appendTo(bottomDisplaySongContainer);

            $('<div/>', {
                id: "embed_coverart",
                class: "embed_hide_when_stopped"
            }).appendTo(bottomDisplaySongContainer);
            var bottomDisplaySong = $('<a/>', {
                id: "embed_display_song",
                target: "_blank",
            }).appendTo(bottomDisplayText);
            bottomDisplaySong.bind("click", EMBED.List.songtitle.click);
            var bottomDisplayArtist = $('<a/>', {
                id: "embed_display_artist",
                target: "_blank",
            }).appendTo(bottomDisplayText);
            bottomDisplayArtist.bind("click", EMBED.List.artist.click);
            var bottomDisplayTime = $('<div/>', {
                id: "embed_display_time",
                class: "embed_hide_when_stopped",
            }).appendTo(bottomDisplaySongContainer);
            $('<div/>', {
                id: "embed_display_time_count",
            }).appendTo(bottomDisplayTime).html(document.createTextNode("0:00"));
            EMBED.Bottom.display.progressBar = $('<div/>', {
                id: "embed_display_progress",
                style: EMBED.QueryParams.process_bar_color != undefined ? "background:" + "#" + EMBED.QueryParams.process_bar_color : null
            }).appendTo(bottomDisplayTime);

            EMBED.Bottom.display.progressedBar = $('<div/>', {
                id: "embed_display_progressed",
                style: EMBED.QueryParams.processed_bar_color != undefined ? "background:" + "#" + EMBED.QueryParams.processed_bar_color : null
            }).appendTo(bottomDisplayTime);

            EMBED.Bottom.display.processBuffered = $('<div/>', {
                id: "embed_display_processbuffered",
                style: EMBED.QueryParams.buffered_bar_color != undefined ? "background:" + "#" + EMBED.QueryParams.buffered_bar_color : null
            }).appendTo(bottomDisplayTime);

            $('<div/>', {
                id: "embed_display_seek_thumb",
                style: EMBED.QueryParams.thumb_color != undefined ? "background:" + "#" + EMBED.QueryParams.thumb_color : null
            }).appendTo(bottomDisplayTime);

            $('<div/>', {
                id: "embed_display_time_total",
            }).appendTo(bottomDisplayTime).html(document.createTextNode("0:00"));

            if (EMBED.QueryParams.font_color != undefined){
                $("#embed_display_text, #embed_display_song, #embed_display_time_count, #embed_display_time_total").attr("style", "color:#" + EMBED.QueryParams.font_color);
            }
            if (EMBED.QueryParams.sub_font_color != undefined){
                $("#embed_display_artist").attr("style", "color:#" + EMBED.QueryParams.font_color);
            }

            $('<div/>', {
                id: "embed_large_share",
                class: "embed_hide_when_stopped"
            }).appendTo(bottomDisplay);

            var playerShareIcons = $('<div/>', {
                id: "embed_player_share_icons",
            }).appendTo(bottomDisplay);

            $("body").append(bottomPlayer);

            // attach list container
            EMBED.List.container = $('<div/>', {
                id: "embed_list_container",
            }).appendTo(bottomPlayer);

            // attach volume slider
            EMBED.Bottom.volume.back = $('<div/>', {
                id: "embed_volume_back",
                style: EMBED.QueryParams.bg_color != undefined ? "background:" + "#" + EMBED.QueryParams.bg_color : null
            }).appendTo(bottomPlayer);

            var volumeSlider = $('<div/>', {
                id: "embed_volume_slider",
                style: EMBED.QueryParams.process_bar_color != undefined ? "background:" + "#" + EMBED.QueryParams.process_bar_color : null
            }).appendTo(EMBED.Bottom.volume.back);


            EMBED.Bottom.volume.thumb= $('<div/>', {
                id: "embed_volume_thumb",
                style: EMBED.QueryParams.thumb_color != undefined ? "background:" + "#" + EMBED.QueryParams.thumb_color : null
            }).appendTo(volumeSlider);


            if ( EMBED.QueryParams.bottom_full == "true" ) {
                EMBED.Bottom.full = true;
            }

            // attach events
            setTimeout(EMBED.Utils.setSizes, 500);
            EMBED.Bottom.built = true;
            // slide up init player (remove hidden class)
            setTimeout(function(){
                $("#embed_bottom_player").removeClass("embed_bottom_player_hidden");
                EMBED.Event.fire(window, "embedPlayerBuilt");
            }, 100);
            EMBED.Bottom.player = bottomPlayer;
            if (shouldAttachEvents == true){
                EMBED.Bottom.attachEvents();
            }

            var iconSetSelect = "material";
            if (EMBED.QueryParams.icon_set != undefined){
                var iconSetSelect = EMBED.QueryParams.icon_set;
            }
            var target = $("#embed_large_repeat");
            target.html(EMBED.ICONSET[iconSetSelect].repeat_one + EMBED.ICONSET[iconSetSelect].repeat_all);

            var target = $("#embed_large_shuffle");
            target.html(EMBED.ICONSET[iconSetSelect].shuffle);

            var target = $("#embed_play_button");
            target.html(EMBED.ICONSET[iconSetSelect].play + EMBED.ICONSET[iconSetSelect].pause);

            var target = $("#embed_prev_button");
            target.html(EMBED.ICONSET[iconSetSelect].prev);

            var target = $("#embed_next_button");
            target.html(EMBED.ICONSET[iconSetSelect].next);

            var target = $("#embed_volume_speaker");
            target.html(EMBED.ICONSET[iconSetSelect].volume_on + EMBED.ICONSET[iconSetSelect].volume_off);

            var target = $("#embed_list_icon");
            target.html(EMBED.ICONSET[iconSetSelect].arrow);

            if (EMBED.QueryParams.icon_color != undefined){
                $("#embed_bottom_player svg *").attr("style", "fill:#"+EMBED.QueryParams.icon_color);

            }
        }
    },
    hide : function(){
        EMBED.List.hide(false);
        var bottomPlayer = $("#embed_bottom_player");
        bottomPlayer.addClass("init");
        EMBED.Bottom.controls.playPauseButton.showPlay();
        EMBED.Player.loaded = false;
        EMBED.Player.pause();
        var hideElements = $('.embed_hide_when_stopped');
        hideElements.addClass("embed_hidden");
        hideElements.removeClass("embed_visible");
        var showElements = $('.embed_hide_when_playing');
        showElements.addClass("embed_visible");
        showElements.removeClass("embed_hidden");
        EMBED.Bottom.full = false;
    },
    showFull : function(){
        var bottomPlayer = $("#embed_bottom_player");
        EMBED.Bottom.fireShowFullDoneEvent = true;
        EMBED.Bottom.showFullDone();
        bottomPlayer.removeClass("init");
    },
    showFullDone : function(){
        if (EMBED.Bottom.fireShowFullDoneEvent == true){
            EMBED.Bottom.fireShowFullDoneEvent = false;
            EMBED.Utils.setSizes();
            EMBED.Bottom.full = true;
            EMBED.Event.fire(window, "embedBottomShowFull");
        }
    },
    controls : {
        playPauseButton : {
            showPlay : function(){
                var playButton = $("#embed_play_button");
                playButton.removeClass("embed_pause_button");
                playButton.addClass("embed_play_button");
                try {
                    EMBED.CurrentPlaylistPlayButton.addClass("embed_paused");
                } catch(e){}
            },
            showPause : function(){
                var playButton = $("#embed_play_button");
                playButton.removeClass("embed_play_button");
                playButton.addClass("embed_pause_button");
                EMBED.CurrentPlaylistPlayButton.removeClass("embed_paused");
            }
        }
    },
    display : {
        progressBar : null,
        processBuffered: null,
        progressWidth : null,
        progressLeft : null,
        progressRight : null,
        fireStopDoneEvent : false,
        interval: false,
        load : function(){
            EMBED.Utils.setSizes();
            EMBED.Bottom.display.showSong(this.song);
            var progress = $("#embed_display_progress");
            progress.addClass("embed_display_progress_loading");
            EMBED.Bottom.display.progressBar.addClass("embed_hidden");
            EMBED.Bottom.seek.thumb.addClass("embed_hidden");
            try {
                EMBED.CurrentPlaylistPlayButton.removeClass("embed_playing");
                EMBED.CurrentPlaylistPlayButton.parent().removeClass("embed_playing");
            } catch(er){}
            EMBED.CurrentPlaylistPlayButton = $("#embed_current_playlist_play_button_"+EMBED.Player.queueNumber);
            if ( EMBED.CurrentPlaylistPlayButton ) {
                EMBED.CurrentPlaylistPlayButton.addClass("embed_playing");
                EMBED.CurrentPlaylistPlayButton.parent().addClass("embed_playing");
                var song = EMBED.Playlist[EMBED.Player.queueNumber];
                var songHash = $.md5(song.url);
                EMBED.CurrentPlaylistRow = $("#embed_current_playlist_row_"+songHash);
                $('.embed_current_playlist_row').css("background", "#"+EMBED.QueryParams.queue_song_color);


                if (EMBED.QueryParams.queue_playing_color != undefined){
                    EMBED.CurrentPlaylistRow.css("background", "#"+EMBED.QueryParams.queue_playing_color);
                }
            }
        },
        showSong : function(song) {
            EMBED.Player.song = song;
            var hideElements = $('.embed_hide_when_playing');
            hideElements.addClass("embed_hidden");
            hideElements.removeClass("embed_visible");
            var showElements = $('.embed_hide_when_stopped');
            showElements.addClass("embed_visible");
            showElements.removeClass("embed_hidden");
            var currentPlaylistSongtitle = $("#embed_display_song")
            if (EMBED.Utils.hasValue(song.songurl) == true){
                currentPlaylistSongtitle.attr("href", song.songurl);
            } else {
                currentPlaylistSongtitle.removeAttr("href");
            }
            var displayTitle = song.title;
            currentPlaylistSongtitle.html(EMBED.Utils.blankUndefined(displayTitle, "Unknown Title"));
            var currentPlaylistArtist = $("#embed_display_artist")
            if (EMBED.Utils.hasValue(song.artisturl) == true){
                currentPlaylistArtist.attr("href", song.artisturl);
            } else {
                currentPlaylistArtist.removeAttr("href");
            }
            currentPlaylistArtist.html(EMBED.Utils.blankUndefined(song.artist, "Unknown Artist"));
            if (song.image){
                $("#embed_coverart").css("background", EMBED.Utils.getCoverart(song.image));
            } else {
                $("#embed_coverart").css("background", EMBED.Utils.getCoverart(EMBED_CSSHOST + "/images/artwork.png"));
            }
            $("#embed_display_time_count").html("0:00");
            $("#embed_display_time_total").html("0:00");
        },
        canplay : function(){
            var progress =$("#embed_display_progress");
            progress.removeClass("embed_display_progress_loading");
            EMBED.Bottom.display.progressBar.removeClass("embed_hidden");
            EMBED.Bottom.seek.thumb.removeClass("embed_hidden");
            EMBED.Bottom.seek.thumb.css("left", "0px");
            EMBED.Bottom.display.progressBar.css("width", "0px");
            EMBED.Bottom.display.processBuffered.css("width", "0px");
            //get song buffered time
            clearInterval(watchBuffer);
            watchBuffer = setInterval(function () {
                if(EMBED.Player.Audio.readyState == 4) {
                    EMBED.Bottom.display.interval = true;
                    EMBED.Bottom.display.processBuffered.css("width", (EMBED.Bottom.display.progressWidth * (EMBED.Player.Audio.buffered.end(0) / EMBED.Player.Audio.duration)) + "px");
                    if (EMBED.Player.Audio.buffered.end(0) >= EMBED.Player.Audio.duration) {
                        clearInterval(watchBuffer);
                        EMBED.Bottom.display.interval = false;
                    }
                }

            }, 1000);
        },
        currentTime : function(){
            try {
                var currentTime = EMBED.Utils.mmss(Math.floor(this.currentTime));
                $("#embed_display_time_count").html(currentTime);
                var duration = EMBED.Utils.mmss(Math.floor(this.duration));
                $("#embed_display_time_total").html(duration);
                var percentage = this.currentTime / this.duration;
                if (EMBED.Bottom.seek.isSeeking == false) {
                    if ((EMBED.Bottom.display.progressWidth * percentage) > 0){
                        EMBED.Bottom.seek.thumb.css("left", (EMBED.Bottom.display.progressWidth * percentage) + "px");
                    }
                    EMBED.Bottom.display.progressBar.css("width", (EMBED.Bottom.display.progressWidth * percentage) + "px");
                }
            } catch(e){}
        },
        buffered : function(){

        },
        stop : function(){
            EMBED.Player.loaded = false;
            var bottomPlayer = $("embed_bottom_player");
            EMBED.Bottom.fireStopDoneEvent = true;
            EMBED.Bottom.display.stopDone();
            bottomPlayer.addClass("init");
            EMBED.List.hide(false);
        },
        stopDone : function(){
            if (EMBED.Bottom.fireStopDoneEvent == true){
                EMBED.Bottom.fireStopDoneEvent = false;
                EMBED.Utils.setSizes();
                $('.embed_hide_when_stopped').addClass("embed_hidden").removeClass("embed_visible");
                $('.embed_hide_when_playing').addClass("embed_visible").removeClass("embed_hidden");
            }
        },
        showFirstSong : function(){
            var song = EMBED.Playlist[0];
            if (song) {
                EMBED.Bottom.display.showSong(song);
            }
        }
    },
    seek : {
        isSeeking : false,
        thumb : null,
        percentage : null,
        mouseDown : function(e){
            EMBED.Event.add(document, 'mousemove', EMBED.Bottom.seek.mouseMove);
            EMBED.Event.add(document, 'mouseup', EMBED.Bottom.seek.mouseUp);
            EMBED.Bottom.seek.isSeeking = true;
            try {
                e.preventDefault();
            } catch(er){}
        },
        mouseUp : function(e){
            EMBED.Event.remove(document, 'mousemove', EMBED.Bottom.seek.mouseMove);
            EMBED.Event.remove(document, 'mouseup', EMBED.Bottom.seek.mouseUp);
            EMBED.Bottom.seek.isSeeking = false;
            EMBED.Player.seek(Math.floor(EMBED.Bottom.seek.percentage * 100));
        },
        mouseMove : function(e){
            var x = e.clientX;
            try {
                if (x < EMBED.Bottom.display.progressLeft){
                    x = EMBED.Bottom.display.progressLeft;
                }
                if (x > EMBED.Bottom.display.progressRight){
                    x = EMBED.Bottom.display.progressRight;
                }
                var seekLeft = x - EMBED.Bottom.display.progressLeft;
                EMBED.Bottom.seek.thumb.css("left", (seekLeft) + "px");
                EMBED.Bottom.display.progressBar.css("width", seekLeft + "px");
                EMBED.Bottom.seek.percentage = seekLeft / EMBED.Bottom.display.progressWidth;
            } catch (e){}
        },
        click : function(e){
            EMBED.Bottom.seek.mouseMove(e);
            EMBED.Player.seek(Math.floor(EMBED.Bottom.seek.percentage * 100));
        },
        showLoading : function(){
            var progress = $("#embed_display_progress");
            progress.addClass("embed_display_progress_loading");
        },
        hideLoading : function(){
            var progress = $("#embed_display_progress");
            progress.removeClass("embed_display_progress_loading");
        }
    },
    volume : {
        thumb : null,
        volumeHeight : null,
        volumeTop : null,
        volumeBottom : null,
        speaker : null,
        back : null,
        mouseMoving : false,
        speakerClick : function(e){
            var slider_height = document.getElementById('embed_volume_slider').clientHeight;
            var thumb_height = document.getElementById('embed_volume_thumb').clientHeight;
            var scroll_height = slider_height - 10;
            if (EMBED.Bottom.volume.speaker.hasClass('embed_volume_on') == true){
                EMBED.Bottom.volume.mouseMove(e, scroll_height);
                EMBED.Bottom.volume.speaker.removeClass('embed_volume_on');
                EMBED.Bottom.volume.speaker.addClass('embed_volume_off');
            } else {
                EMBED.Bottom.volume.mouseMove(e, -3);
            }
            EMBED.Bottom.volume.mouseMoving = false;
        },
        mouseDown : function(e){
            EMBED.Event.add(document, 'mousemove', EMBED.Bottom.volume.mouseMove);
            EMBED.Event.add(document, 'mouseup', EMBED.Bottom.volume.mouseUp);
            EMBED.Bottom.volume.thumb.addClass("embed_volume_thumb_active");
            try {
                e.preventDefault();
            } catch(er){}
        },
        mouseUp : function(e){
            EMBED.Event.remove(document, 'mousemove', EMBED.Bottom.volume.mouseMove);
            EMBED.Event.remove(document, 'mouseup', EMBED.Bottom.volume.mouseUp);
            EMBED.Bottom.volume.thumb.removeClass("embed_volume_thumb_active");
            EMBED.Bottom.volume.mouseMoving = false;
            setTimeout(EMBED.Bottom.volume.hide, 5000);
        },
        mouseMove : function(e, t){
            EMBED.Bottom.volume.mouseMoving = true;
            if (t == undefined){
                var y = e.clientY;
                try {
                    if (y < EMBED.Bottom.volume.volumeTop - 3){
                        y = EMBED.Bottom.volume.volumeTop - 3;
                    }
                    if (y > EMBED.Bottom.volume.volumeBottom - 10){
                        y = EMBED.Bottom.volume.volumeBottom - 10;
                    }
                    var top = y - EMBED.Bottom.volume.volumeTop;
                } catch (e){}
            } else {
                var top = t;
            }
            var volume = (top  / (EMBED.Bottom.volume.volumeHeight - 10))*-1+1;
            EMBED.Bottom.volume.thumb.css("top", (top) + "px");
            if (volume > 1){
                volume = 1;
            }
            if (volume < 0){
                volume = 0;
            }
            EMBED.Player.setVolume(volume);
            if (volume == 0){
                EMBED.Bottom.volume.speaker.removeClass('embed_volume_on');
                EMBED.Bottom.volume.speaker.addClass('embed_volume_off');
            } else {
                EMBED.Bottom.volume.speaker.removeClass('embed_volume_off');
                EMBED.Bottom.volume.speaker.addClass('embed_volume_on');
            }
        },
        click : function(e){
            EMBED.Bottom.volume.mouseMove(e);
            EMBED.Bottom.volume.mouseMoving = false;
        },
        mouseOverTimeout : null,
        mouseOverSpeaker : function(e){
            clearTimeout(EMBED.Bottom.volume.mouseOverTimeout);
            EMBED.Bottom.volume.back.addClass("embed_volume_over");
            EMBED.Utils.setSizes();
        },
        mouseOutSpeaker : function(e){
            EMBED.Bottom.volume.hide();
        },
        mouseOverBack : function(e){
            clearTimeout(EMBED.Bottom.volume.mouseOverTimeout);
            EMBED.Bottom.volume.back.addClass("embed_volume_over");
        },
        mouseOutBack : function(e){
            EMBED.Bottom.volume.hide();
        },
        hide : function(){
            if (EMBED.Bottom.volume.mouseMoving == false){
                EMBED.Bottom.volume.mouseOverTimeout = setTimeout(function(){
                    //EMBED.Bottom.volume.back.className = "";
                    EMBED.Bottom.volume.back.removeClass("embed_volume_over");
                }, 1000);
            }
        },
    }
}
if (typeof(NiNaAudio) == 'undefined') {
    NiNaAudio = function(srcString) {
        var newAudioElement;
        dispatchReady = function() {
            var event = document.createEvent('Event');
            event.initEvent("ready", true, true);
            newAudioElement.dispatchEvent(event);
        };
        newAudioElement = document.createElement('audio');
        if (srcString != "" && srcString != undefined && srcString != null) {
            newAudioElement.src = srcString;
        }
        document.body.appendChild(newAudioElement);
        setTimeout(dispatchReady, 10);
        return newAudioElement;
    };
};
EMBED.Player = {
    queueNumber : 0,
    song : 0,
    oldListLength : 0,
    loaded : false,
    repeat : 0,
    shuffle: false,
    Audio: null,
    Init : function () {
        EMBED.Player.Audio = new NiNaAudio();
        EMBED.Player.AddListeners();
    },
    AddListeners: function () {
        EMBED.Player.Audio.addEventListener("ended", EMBED.Player.ended, false);
        EMBED.Player.Audio.addEventListener("error", EMBED.Player.error, false);
        EMBED.Player.Audio.addEventListener("progress", EMBED.Bottom.display.buffered, false);
        EMBED.Player.Audio.addEventListener("play", EMBED.Bottom.controls.playPauseButton.showPause, false);
        EMBED.Player.Audio.addEventListener("pause", EMBED.Bottom.controls.playPauseButton.showPlay, false);
        EMBED.Player.Audio.addEventListener("timeupdate", EMBED.Bottom.display.currentTime, false);
        EMBED.Player.Audio.addEventListener("canplay",EMBED.Bottom.display.canplay, false);
        try {
            if (navigator.vendor.indexOf("Apple") != -1) {
                EMBED.Player.Audio.addEventListener("timeupdate", EMBED.Bottom.display.currentTime, false);
                EMBED.Player.Audio.removeEventListener("ended", EMBED.Player.next, false)
            }
        } catch (a) {}
    },
    RemoveListeners: function () {
        EMBED.Player.Audio.removeEventListener("ended", EMBED.Player.next, false);
        EMBED.Player.Audio.removeEventListener("error", EMBED.Player.error, false);
        EMBED.Player.Audio.removeEventListener("progress", EMBED.Bottom.display.buffered, false);
        EMBED.Player.Audio.removeEventListener("play", EMBED.Bottom.controls.playPauseButton.showPause, false);
        EMBED.Player.Audio.removeEventListener("pause", EMBED.Bottom.controls.playPauseButton.showPlay, false);
        EMBED.Player.Audio.removeEventListener("timeupdate", EMBED.Bottom.display.currentTime, false);
        EMBED.Player.Audio.removeEventListener("canplay",EMBED.Bottom.display.canplay, false);
    },
    load : function(){
        if (!EMBED.Player.loaded){
            EMBED.OriginalPlaylist = EMBED.Playlist.concat([]);
            EMBED.Player.Init();
            EMBED.Player.loaded = true;
        }
    },
    getRandomInt: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    ended : function(){
        //Will fire automatic when song ended
        //Check if repeat one then replay the current song p
        if (EMBED.Player.repeat == 1){
            EMBED.Player.Audio.currentTime = 0;
            EMBED.Player.Audio.play();
            return
        }
        if( EMBED.Player.shuffle == true ){
            var position = EMBED.Player.getRandomInt(0, (EMBED.Playlist.length-1));
            EMBED.Player.playAt(position);
            return;
        }
        //Check if the last song of queue, then check if repeat all active
        if (EMBED.Player.repeat == 2 && EMBED.Player.queueNumber == (EMBED.Playlist.length-1)){
            EMBED.Player.Audio.currentTime = 0;
            EMBED.Player.play(0);
            return;
        }
        //this is current song alert( JSON.stringify((EMBED.Playlist[EMBED.Player.queueNumber]) ));
        if(EMBED.Player.queueNumber < (EMBED.Playlist.length-1)) {
            EMBED.Player.playAt(EMBED.Player.queueNumber+1);
        } else {
            if (EMBED.Player.repeat == 2){
                EMBED.Player.playAt(0);
            } else return;
        }
    },
    previous : function(){
        if(EMBED.Player.Audio == null) return;
        if(EMBED.Player.queueNumber < EMBED.Playlist.length) {
            if(EMBED.Player.queueNumber == 0){
                return;
            }
            EMBED.Player.playAt(EMBED.Player.queueNumber-1);
        }
    },
    next : function(){
        if(EMBED.Player.Audio == null) return;
        if( EMBED.Player.shuffle == true){
            var position = EMBED.Player.getRandomInt(0, (EMBED.Playlist.length-1));
            EMBED.Player.playAt(position);
            return;
        }
        //this is current song alert( JSON.stringify((EMBED.Playlist[EMBED.Player.queueNumber]) ));
        if(EMBED.Player.queueNumber < (EMBED.Playlist.length-1)) {
            EMBED.Player.playAt(EMBED.Player.queueNumber+1);
        } else {
            if (EMBED.Player.repeat == 2){
                EMBED.Player.playAt(0);
            } else return;
        }


    },
    play : function(position){
        if (!EMBED.Player.loaded){
            EMBED.Player.load();
            EMBED.Player.playAt(position);
        } else {
            EMBED.Player.playAt(position);
        }
    },
    pause : function(){
        EMBED.Player.Audio.pause();
    },
    playAt : function(position){
        if (!EMBED.Player.loaded){
            EMBED.Player.load();
            EMBED.Player.playAt(position);
            return;
        }
        //Show loading bar (option)
        this.song = EMBED.Playlist[position];
        this.queueNumber = position;
        EMBED.Player.Audio.src = this.song.url;
        EMBED.Player.Audio.load();
        EMBED.Player.Audio.play();
        this.loading();
    },
    error : function(){
        console.log("Error when playing, should move to next song!");
    },
    playPause : function(position){
        if (!position || typeof(position) != "Number"){
            position = 0;
        }
        if (!EMBED.Player.loaded){
            EMBED.Bottom.showFull();
            EMBED.Player.play(position);
        } else {
            //check if is playing
            if (EMBED.Player.Audio.paused == false) {
                EMBED.Player.Audio.pause();
            } else {
                EMBED.Player.Audio.play();
            }
        }
        EMBED.List.queueIcon.check(EMBED.Playlist);
    },
    loading : function(){
        EMBED.Player.song = this.song;
        EMBED.Bottom.display.load.apply(this);
    },
    seek : function(percentage){
        EMBED.Player.Audio.duration
        EMBED.Player.seekTo(percentage);
    },
    seekTo : function(percentage){
        var time = percentage * EMBED.Player.Audio.duration / 100;
        EMBED.Player.Audio.currentTime = time;
    },
    repeatToggled : function(){
        var largeRepeat = $("#embed_large_repeat");
        if (!EMBED.Player.repeat){
            largeRepeat.addClass('embed_repeat_one');
            EMBED.Player.repeat = 1;
            return;
        }
        if (EMBED.Player.repeat == 1){
            largeRepeat.removeClass('embed_repeat_one');
            largeRepeat.addClass('embed_repeat_all');
            EMBED.Player.repeat = 2;
            return;
        }

        if (EMBED.Player.repeat == 2){
            largeRepeat.removeClass('embed_repeat_one');
            largeRepeat.removeClass('embed_repeat_all');
            EMBED.Player.repeat = 0;
            return;
        }
    },
    shuffleToggled : function(e){
        var largeShuffle = $("#embed_large_shuffle");
        if (!EMBED.Player.shuffle){
            largeShuffle.addClass('embed_shuffle_enabled');
            EMBED.Player.shuffle = true;
            return;
        } else {
            largeShuffle.removeClass('embed_shuffle_enabled');
            EMBED.Player.shuffle = false;
            return;
        }
    },
    setVolume : function(volume){
        if(volume < 0.1) volume = 0;
        EMBED.Player.Audio.volume = volume;
    },
    getSong : function(callbackString){

    },
    //Add sing song {object}
    addSong : function(json, play){
        var song = json;
        var position = EMBED.PlaylistObj.add(song, false);
        EMBED.PlaylistObj.done();
        if(play == true) {
            EMBED.Player.playAt(position);
        }
    },
    //Add multi songs [array]
    addSongs: function(json, play){
        var added = 0;
        var len = json.length;
        var first_song_pos = 0;
        for (var i = 0; i < len; i++){
            var song = json[i];
            var position = EMBED.PlaylistObj.add(song, false);
            if(i == 0 ) first_song_pos = EMBED.PlaylistObj.add(song, false);
            if (position != -1){
                added++;
            }
        }
        if (added > 0){
            EMBED.PlaylistObj.done();
        }
        if(play == true) {
            EMBED.Player.playAt(first_song_pos);
        }
    },
    addSongAt : function(json, play){
        var song = json;
        var position = EMBED.PlaylistObj.add(song, false);
        EMBED.PlaylistObj.done();
        if(play == true) {
            EMBED.Player.playAt(position);
        }
    },
    removeSong : function(position){
        EMBED.PlaylistObj.remove(position);
        var listMiddle = $("#embed_list_middle");
        if(!EMBED.Playlist.length ){
            EMBED.List.renderSongs(listMiddle);
            return;
        }
        if(EMBED.Player.loaded == true){
            if((EMBED.Player.queueNumber == position) && (EMBED.Player.queueNumber = (EMBED.Playlist.length))) {
                EMBED.Player.playAt(position-1);
            } else if(EMBED.Player.queueNumber == position) {
                EMBED.Player.playAt(position);
            }
            if(EMBED.Player.queueNumber > position){
                EMBED.Player.queueNumber = EMBED.Player.queueNumber - 1;
            }
        }
        EMBED.List.renderSongs(listMiddle);
    },
    playSong : function(position){
        EMBED.Player.playAt(position);
    }
}
//Build queue
EMBED.List = {
    container : null,
    icon : {
        click : function(){
            if ($("#embed_list_icon").hasClass("selected") == false){
                EMBED.List.show();
            } else {
                EMBED.List.hide();
            }
        }
    },
    move: function(old_index, new_index) {
        if (new_index >= EMBED.Playlist.length) {
            var k = new_index - EMBED.Playlist.length + 1;
            while (k--) {
                EMBED.Playlist.push(undefined);
            }
        }
        EMBED.Playlist.splice(new_index, 0, EMBED.Playlist.splice(old_index, 1)[0]);
    },
    show : function(){
        $("#embed_list_icon").addClass("selected");
        $("#embed_bottom_player").removeClass("init");
    },
    hide : function(){
        $("#embed_list_icon").removeClass("selected");
        $("#embed_bottom_player").addClass("init");
    },
    build : function(){
        EMBED.Event.remove(window, "embedBottomShowFull", EMBED.List.build);
        var bottomPlayer = $("#embed_bottom_player");
        EMBED.List.container.html("");

        var listHeader = $('<div/>', {
            id: "embed_list_header",
            style: EMBED.QueryParams.queue_top_color != undefined ? "background:" + "#" + EMBED.QueryParams.queue_top_color : null
        }).appendTo(EMBED.List.container);

        var closeButton = $('<div/>', {
            id: "embed_playlist_close",
        }).appendTo(listHeader);
        $(closeButton).bind("click", EMBED.List.hide)


        var siteLogo = $('<div/>', {
            id: "embed_site_logo",
        }).appendTo(listHeader);


        $('<a/>', {
            id: "embed_logo_link",
            href: EMBED_WEBSITE+EMBED_REF_FROM,
            target: "_blank"
        }).appendTo(siteLogo);


        var listMiddle = $('<ul/>', {
            id: "embed_list_middle",
            style: EMBED.QueryParams.queue_color != undefined ? "background:" + "#" + EMBED.QueryParams.queue_color : null
        }).appendTo(EMBED.List.container);
        EMBED.List.renderSongs(listMiddle);

        if (EMBED.Player.queueNumber != 0){
            //listMiddle.scrollTop = EMBED.Player.queueNumber * 35;
        }

        $(EMBED.List.container).addClass("embed_list_show");


        //disable queue sortable on mobile (if window width less than 800px
        if(!EMBED.Utils.detectMod()){
            EMBED.Sortable.create(document.getElementById("embed_list_middle"), {
                animation: 150, // ms, animation speed moving items when sorting, `0` without animation
                //handle: ".tile__title", // Restricts sort start click/touch to the specified element
                //draggable: ".tile", // Specifies which items inside the element should be sortable,
                filter: '.embed_list_remove',
                onFilter: function (evt) {
                    //EMBED.Player.removeSong();
                    evt.item.parentNode.removeChild(evt.item);
                    EMBED.Player.removeSong(evt.oldIndex);
                },
                onUpdate: function (evt){
                    EMBED.List.move(evt.oldIndex, evt.newIndex);
                    if(evt.oldIndex == EMBED.Player.queueNumber) {
                        EMBED.Player.queueNumber = evt.newIndex;
                    }
                    EMBED.List.renderSongs(listMiddle);
                },
                dragClass: "embed_sortable_drag",
            });
        }
    },
    renderSongs : function(listMiddle){
        listMiddle.html("");
        var tf = false;
        for (var i = 0; i < EMBED.Playlist.length; i++){
            var song = EMBED.Playlist[i];
            var songHash = $.md5(song.url);
            tf = !tf;

            var currentPlaylistRow = $('<li/>', {
                id: "embed_current_playlist_row_" + songHash,
                class: "embed_current_playlist_row",
                style: EMBED.QueryParams.queue_song_color != undefined ? "background:" + "#" + EMBED.QueryParams.queue_song_color : null
            }).attr("position", i);


            var currentPlaylistPlayButton = $('<div/>', {
                id: "embed_current_playlist_play_button_"+i,
                class: "embed_current_playlist_play_button",
                style: EMBED.QueryParams.queue_song_color != undefined ? "background:" + "#" + EMBED.QueryParams.queue_song_color : null
            }).appendTo(currentPlaylistRow);
            currentPlaylistPlayButton.bind("click", EMBED.List.playButton.click);

            if (i == EMBED.Player.queueNumber && EMBED.Player.loaded == true){
                $(currentPlaylistPlayButton).addClass("embed_playing");
                if (EMBED.QueryParams.queue_playing_color != undefined){
                    currentPlaylistRow.css("background", "#"+EMBED.QueryParams.queue_playing_color);
                }
                EMBED.CurrentPlaylistPlayButton = currentPlaylistPlayButton;
            }

            $('<img/>', {
                src: song.image ? song.image : EMBED_CSSHOST + "/images/artwork.png",
            }).appendTo(currentPlaylistPlayButton);

            $('<div/>', {
                class: "embed_current_playlist_playpause_button",
            }).appendTo(currentPlaylistPlayButton);
            var currentPlaylistSongtitle = $('<a/>', {
                class: "embed_current_playlist_songtitle",
                style: EMBED.QueryParams.playlist_songtitle_color != undefined ? "color:" + "#" + EMBED.QueryParams.playlist_songtitle_color : null
            }).appendTo(currentPlaylistRow);
            currentPlaylistSongtitle.attr("position", i);
            currentPlaylistSongtitle.html(document.createTextNode(EMBED.Utils.blankUndefined(song.title, "")));
            currentPlaylistSongtitle.bind("click",  EMBED.List.playButton.click);


            var currentPlaylistArtist = $('<a/>', {
                class: "embed_current_playlist_artist",
                style: EMBED.QueryParams.playlist_artistname_color != undefined ? "color:" + "#" + EMBED.QueryParams.playlist_artistname_color : null
            }).appendTo(currentPlaylistRow);
            currentPlaylistArtist.html(document.createTextNode(EMBED.Utils.blankUndefined(song.artist, "")));
            currentPlaylistArtist.bind("click",  EMBED.List.playButton.click);
            var listRemoveIcon = $('<a/>', {
                id: "embed_list_remove_"+song.id,
                class: "embed_list_remove",
                title: "Remove this song"
            }).appendTo(currentPlaylistRow);
            listRemoveIcon.attr("position", i);
            listRemoveIcon.bind("click",  EMBED.List.removeIcon.click);

            var listQueueIcon = $('<a/>', {
                id: "embed_list_queue",
                class: "embed_list_remove",
                song_hash:  songHash,
                title: "Add song to Play Queue"
            }).appendTo(currentPlaylistRow);
            if (EMBED.List.queueIcon.selected[song.id]){
                listQueueIcon.addClass("selected");
                listQueueIcon.attr("title", "Song in Play Queue");
            } else {
                listQueueIcon.bind("click",  EMBED.List.queueIcon.click);
            }

            var listLinkIcon = $('<a/>', {
                song_hash: songHash,
                class: "embed_list_more",
            }).appendTo(currentPlaylistRow);

            currentPlaylistRow.appendTo(listMiddle);
        }
    },
    playButton : {
        click : function(){
            if ($(this).hasClass('embed_playing')){
                EMBED.Player.playPause();
            } else {
                var parent = $(this).parent().closest('li');
                if (parent.length){
                    var position = parseInt(parent.attr("position"));
                    EMBED.Player.playAt(position);
                    EMBED.List.queueIcon.check(EMBED.Playlist);
                }
            }
        }
    },
    removeIcon : {
        click : function(){
                var position = $(this).attr("position");
                if (position){
                    EMBED.Player.removeSong(position);
                } else {
                    alert("There was a problem. Please try again");
                }
        }
    },
    queueIcon : {
        selected : {},
        click : function(e){
            var songHash = $(this).attr("song_hash");
            var song = EMBED.PlaylistObj.obj[songHash];
        },
        selected : function(song){
            try {
                var icon = $("#embed_list_queue_"+song.id);
                icon.addClass("selected");
                icon.attr("title", "Song in Play Queue");
                EMBED.List.queueIcon.selected[song.id] = true;
            } catch(e){}
        },
        check : function(array){
            var len = array.length;
            for (var i = 0; i < len; i++){
                var song = array[i];
                try {
                    EMBED.List.queueIcon.selected[song.id] = true;
                    var icon = $("#embed_list_queue_"+song.id);
                    icon.addClass("selected");
                    icon.attr("title", "Song in Play Queue");
                } catch(e){}
            }
        }
    },
    songtitle : {
        click : function(e){
            try {
                var url = $(this).attr("href");
            } catch(err){}
            try {
                e.stopPropagation();
                return false;
            } catch(er){}
        }
    },
    artist : {
        click : function(e){
            try {
                var url = $(this).attr("href");
            } catch(err){}
            try {
                e.stopPropagation();
                return false;
            } catch(er){}
        }
    }
}
EMBED.Event = {
    listeners : {},
    add : function(target, type, fn){
        if (target){
            if (typeof this.listeners[type+target] == 'undefined') {
                this.listeners[type+target] = [];
            }
            this.listeners[type+target].push(fn);
            if (target.addEventListener) {
                target.addEventListener(type, fn, false);
            } else {
                target.attachEvent('on' + type, fn);
            }
        }
    },
    remove : function(target, type, fn){
        try {
            if (typeof this.listeners[type+target] != 'undefined') {
                for (var i = 0, l; l = this.listeners[type+target][i]; i++) {
                    if (l == fn) break;
                }
                this.listeners[type+target].splice(i, 1);
            }
            if (target.removeEventListener) {
                target.removeEventListener(type, fn, false);
            } else {
                target.detachEvent('on' + type, fn);
            }
        } catch(e){}
    },
    fire : function(target, type, object){
        if (typeof this.listeners[type+target] != 'undefined' && this.listeners[type+target].length) {
            var newArray = this.listeners[type+target].slice();
            for (var i = 0, l; l = newArray[i]; i++) {
                l(object);
            }
            return true;
        }
        return false;
    },
    stop : function(e){
        try {
            e.stopPropagation();
        } catch (e){
            try {
                window.event.cancelBubble = true;
            } catch (e) {}
        }
    }
}
EMBED.Utils = {
    detectMod : function() {
        if(window.innerWidth <= 800) {
            return true;
        } else {
            return false;
        }
    },
    mmss : function (secs) {
        var s = secs % 60;
        if (s < 10) {
            s = "0" + s;
        }
        return Math.floor(secs/60) + ":" + s;
    },
    setSizes : function(){
        try {
            var progress = document.getElementById("embed_display_progress");
            EMBED.Bottom.display.progressWidth = progress.offsetWidth;
            EMBED.Bottom.display.progressLeft = EMBED.Utils.getLeft(progress);
            EMBED.Bottom.display.progressRight = EMBED.Bottom.display.progressLeft + EMBED.Bottom.display.progressWidth;
            var volume = document.getElementById("embed_volume_slider");
            EMBED.Bottom.volume.volumeHeight = volume.offsetHeight;
            EMBED.Bottom.volume.volumeTop = EMBED.Utils.getTop(volume) - document.body.scrollTop;
            if ( EMBED.Bottom.volume.volumeTop < 0 ) {
                EMBED.Bottom.volume.volumeTop = EMBED.Bottom.player.offsetHeight + volume.offsetTop;
            }
            EMBED.Bottom.volume.volumeBottom = EMBED.Bottom.volume.volumeTop + EMBED.Bottom.volume.volumeHeight;
        } catch(e){}
    },
    setBufferedSize : function (){
        var buffered = $("#embed_display_processbuffered");
        buffered.css("width", "0px");
    },
    getLeft : function(element){
        var offset = element.offsetLeft;
        while (element = element.offsetParent){
            offset += element.offsetLeft;
        }
        return offset;
    },
    getTop : function(element){
        var offset = element.offsetTop;
        while (element = element.offsetParent){
            offset += element.offsetTop;
        }
        return offset;
    },
    getWidth : function(element){
        return element.offsetWidth;
    },
    getCoverart : function(img){
        return "url("+img+") no-repeat";
    },
    hasValue : function(s){
        if (s === undefined){
            return false;
        }
        if (s === 'undefined'){
            return false;
        }
        if (s === ""){
            return false;
        }
        if (s === null){
            return false;
        }
        if (s === "null"){
            return false;
        }
        return true;
    },
    getQueryParams : function(str, obj){
        try {
            var splits = str.split("?");
            var paramString = splits[1];
            var params = paramString.split("&");
            for (var i = 0; i < params.length; i++){
                var param = params[i];
                var keyValue = param.split("=");
                obj[keyValue[0]] = keyValue[1];
            }
        } catch(e){}
    },
    blankUndefined : function(str, replace){
        var r = replace;
        if (str != undefined && str != 'undefined' && str != null && str != "null"){
            r = str;
        }
        return r;
    },
}
EMBED.Event.add(document, "embedReset", EMBED.Reset);
/**!
 * Sortable
 * @author	RubaXa   <trash@rubaxa.org>
 * @license MIT
 * @https://github.com/rubaxa/Sortable
 * Changed function name from Sortable to EMBED.Sortable;
 */
!function(t){"use strict";"function"==typeof define&&define.amd?define(t):"undefined"!=typeof module&&void 0!==module.exports?module.exports=t():window.EMBED.Sortable=t()}(function(){"use strict";if("undefined"==typeof window||!window.document)return function(){throw new Error("EMBED.Sortable.js requires a window with a document")};var t,e,n,o,i,r,a,l,s,c,d,h,u,f,p,g,v,m,_,b,D,y={},w=/\s+/g,T=/left|right|inline/,S="EMBED.Sortable"+(new Date).getTime(),C=window,E=C.document,x=C.parseInt,k=C.setTimeout,N=C.jQuery||C.Zepto,B=C.Polymer,P=!1,Y="draggable"in E.createElement("div"),X=!navigator.userAgent.match(/(?:Trident.*rv[ :]?11\.|msie)/i)&&((D=E.createElement("x")).style.cssText="pointer-events:auto","auto"===D.style.pointerEvents),O=!1,I=Math.abs,M=Math.min,A=[],R=[],L=function(){return!1},F=ot(function(t,e,n){if(n&&e.scroll){var o,i,r,a,d,h,u=n[S],f=e.scrollSensitivity,p=e.scrollSpeed,g=t.clientX,v=t.clientY,m=window.innerWidth,b=window.innerHeight;if(s!==n&&(l=e.scroll,s=n,c=e.scrollFn,!0===l)){l=n;do{if(l.offsetWidth<l.scrollWidth||l.offsetHeight<l.scrollHeight)break}while(l=l.parentNode)}l&&(o=l,i=l.getBoundingClientRect(),r=(I(i.right-g)<=f)-(I(i.left-g)<=f),a=(I(i.bottom-v)<=f)-(I(i.top-v)<=f)),r||a||(a=(b-v<=f)-(v<=f),((r=(m-g<=f)-(g<=f))||a)&&(o=C)),y.vx===r&&y.vy===a&&y.el===o||(y.el=o,y.vx=r,y.vy=a,clearInterval(y.pid),o&&(y.pid=setInterval(function(){h=a?a*p:0,d=r?r*p:0,"function"==typeof c&&"continue"!==c.call(u,d,h,t,_,o)||(o===C?C.scrollTo(C.pageXOffset+d,C.pageYOffset+h):(o.scrollTop+=h,o.scrollLeft+=d))},24)))}},30),H=function(t){function e(t,e){return null!=t&&!0!==t||null!=(t=n.name)?"function"==typeof t?t:function(n,o){var i=o.options.group.name;return e?t:t&&(t.join?t.indexOf(i)>-1:i==t)}:L}var n={},o=t.group;o&&"object"==typeof o||(o={name:o}),n.name=o.name,n.checkPull=e(o.pull,!0),n.checkPut=e(o.put),n.revertClone=o.revertClone,t.group=n};try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){P={capture:!1,passive:!1}}}))}catch(t){}function W(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"EMBED.Sortable: `el` must be HTMLElement, and not "+{}.toString.call(t);this.el=t,this.options=e=it({},e),t[S]=this;var n={group:null,sort:!0,disabled:!1,store:null,handle:null,scroll:!0,scrollSensitivity:30,scrollSpeed:10,draggable:/[uo]l/i.test(t.nodeName)?"li":">*",ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==W.supportPointer};for(var o in n)!(o in e)&&(e[o]=n[o]);H(e);for(var i in this)"_"===i.charAt(0)&&"function"==typeof this[i]&&(this[i]=this[i].bind(this));this.nativeDraggable=!e.forceFallback&&Y,V(t,"mousedown",this._onTapStart),V(t,"touchstart",this._onTapStart),e.supportPointer&&V(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(V(t,"dragover",this),V(t,"dragenter",this)),R.push(this._onDragOver),e.store&&this.sort(e.store.get(this))}function j(e,n){"clone"!==e.lastPullMode&&(n=!0),o&&o.state!==n&&(G(o,"display",n?"none":""),n||o.state&&(e.options.group.revertClone?(i.insertBefore(o,r),e._animate(t,o)):i.insertBefore(o,t)),o.state=n)}function U(t,e,n){if(t){n=n||E;do{if(">*"===e&&t.parentNode===n||nt(t,e))return t}while(void 0,t=(i=(o=t).host)&&i.nodeType?i:o.parentNode)}var o,i;return null}function V(t,e,n){t.addEventListener(e,n,P)}function q(t,e,n){t.removeEventListener(e,n,P)}function z(t,e,n){if(t)if(t.classList)t.classList[n?"add":"remove"](e);else{var o=(" "+t.className+" ").replace(w," ").replace(" "+e+" "," ");t.className=(o+(n?" "+e:"")).replace(w," ")}}function G(t,e,n){var o=t&&t.style;if(o){if(void 0===n)return E.defaultView&&E.defaultView.getComputedStyle?n=E.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),void 0===e?n:n[e];e in o||(e="-webkit-"+e),o[e]=n+("string"==typeof n?"":"px")}}function Q(t,e,n){if(t){var o=t.getElementsByTagName(e),i=0,r=o.length;if(n)for(;i<r;i++)n(o[i],i);return o}return[]}function Z(t,e,n,i,r,a,l,s,c){t=t||e[S];var d=E.createEvent("Event"),h=t.options,u="on"+n.charAt(0).toUpperCase()+n.substr(1);d.initEvent(n,!0,!0),d.to=r||e,d.from=a||e,d.item=i||e,d.clone=o,d.oldIndex=l,d.newIndex=s,d.originalEvent=c,e.dispatchEvent(d),h[u]&&h[u].call(t,d)}function J(t,e,n,o,i,r,a,l){var s,c,d=t[S],h=d.options.onMove;return(s=E.createEvent("Event")).initEvent("move",!0,!0),s.to=e,s.from=t,s.dragged=n,s.draggedRect=o,s.related=i||e,s.relatedRect=r||e.getBoundingClientRect(),s.willInsertAfter=l,s.originalEvent=a,t.dispatchEvent(s),h&&(c=h.call(d,s,a)),c}function K(t){t.draggable=!1}function $(){O=!1}function tt(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,o=0;n--;)o+=e.charCodeAt(n);return o.toString(36)}function et(t,e){var n=0;if(!t||!t.parentNode)return-1;for(;t&&(t=t.previousElementSibling);)"TEMPLATE"===t.nodeName.toUpperCase()||">*"!==e&&!nt(t,e)||n++;return n}function nt(t,e){if(t){if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e)}return!1}function ot(t,e){var n,o;return function(){void 0===n&&(n=arguments,o=this,k(function(){1===n.length?t.call(o,n[0]):t.apply(o,n),n=void 0},e))}}function it(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function rt(t){return B&&B.dom?B.dom(t).cloneNode(!0):N?N(t).clone(!0)[0]:t.cloneNode(!0)}function at(t){return k(t,0)}function lt(t){return clearTimeout(t)}return W.prototype={constructor:W,_onTapStart:function(e){var n,o=this,i=this.el,r=this.options,l=r.preventOnFilter,s=e.type,c=e.touches&&e.touches[0],d=(c||e).target,h=e.target.shadowRoot&&e.path&&e.path[0]||d,u=r.filter;if(function(t){A.length=0;var e=t.getElementsByTagName("input"),n=e.length;for(;n--;){var o=e[n];o.checked&&A.push(o)}}(i),!t&&!(/mousedown|pointerdown/.test(s)&&0!==e.button||r.disabled)&&!h.isContentEditable&&(d=U(d,r.draggable,i))&&a!==d){if(n=et(d,r.draggable),"function"==typeof u){if(u.call(this,e,d,this))return Z(o,h,"filter",d,i,i,n),void(l&&e.preventDefault())}else if(u&&(u=u.split(",").some(function(t){if(t=U(h,t.trim(),i))return Z(o,t,"filter",d,i,i,n),!0})))return void(l&&e.preventDefault());r.handle&&!U(h,r.handle,i)||this._prepareDragStart(e,c,d,n)}},_prepareDragStart:function(n,o,l,s){var c,d=this,h=d.el,u=d.options,p=h.ownerDocument;l&&!t&&l.parentNode===h&&(m=n,i=h,e=(t=l).parentNode,r=t.nextSibling,a=l,g=u.group,f=s,this._lastX=(o||n).clientX,this._lastY=(o||n).clientY,t.style["will-change"]="all",c=function(){d._disableDelayedDrag(),t.draggable=d.nativeDraggable,z(t,u.chosenClass,!0),d._triggerDragStart(n,o),Z(d,i,"choose",t,i,i,f)},u.ignore.split(",").forEach(function(e){Q(t,e.trim(),K)}),V(p,"mouseup",d._onDrop),V(p,"touchend",d._onDrop),V(p,"touchcancel",d._onDrop),V(p,"selectstart",d),u.supportPointer&&V(p,"pointercancel",d._onDrop),u.delay?(V(p,"mouseup",d._disableDelayedDrag),V(p,"touchend",d._disableDelayedDrag),V(p,"touchcancel",d._disableDelayedDrag),V(p,"mousemove",d._disableDelayedDrag),V(p,"touchmove",d._disableDelayedDrag),u.supportPointer&&V(p,"pointermove",d._disableDelayedDrag),d._dragStartTimer=k(c,u.delay)):c())},_disableDelayedDrag:function(){var t=this.el.ownerDocument;clearTimeout(this._dragStartTimer),q(t,"mouseup",this._disableDelayedDrag),q(t,"touchend",this._disableDelayedDrag),q(t,"touchcancel",this._disableDelayedDrag),q(t,"mousemove",this._disableDelayedDrag),q(t,"touchmove",this._disableDelayedDrag),q(t,"pointermove",this._disableDelayedDrag)},_triggerDragStart:function(e,n){(n=n||("touch"==e.pointerType?e:null))?(m={target:t,clientX:n.clientX,clientY:n.clientY},this._onDragStart(m,"touch")):this.nativeDraggable?(V(t,"dragend",this),V(i,"dragstart",this._onDragStart)):this._onDragStart(m,!0);try{E.selection?at(function(){E.selection.empty()}):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(){if(i&&t){var e=this.options;z(t,e.ghostClass,!0),z(t,e.dragClass,!1),W.active=this,Z(this,i,"start",t,i,i,f)}else this._nulling()},_emulateDragOver:function(){if(_){if(this._lastX===_.clientX&&this._lastY===_.clientY)return;this._lastX=_.clientX,this._lastY=_.clientY,X||G(n,"display","none");var t=E.elementFromPoint(_.clientX,_.clientY),e=t,o=R.length;if(t&&t.shadowRoot&&(e=t=t.shadowRoot.elementFromPoint(_.clientX,_.clientY)),e)do{if(e[S]){for(;o--;)R[o]({clientX:_.clientX,clientY:_.clientY,target:t,rootEl:e});break}t=e}while(e=e.parentNode);X||G(n,"display","")}},_onTouchMove:function(t){if(m){var e=this.options,o=e.fallbackTolerance,i=e.fallbackOffset,r=t.touches?t.touches[0]:t,a=r.clientX-m.clientX+i.x,l=r.clientY-m.clientY+i.y,s=t.touches?"translate3d("+a+"px,"+l+"px,0)":"translate("+a+"px,"+l+"px)";if(!W.active){if(o&&M(I(r.clientX-this._lastX),I(r.clientY-this._lastY))<o)return;this._dragStarted()}this._appendGhost(),b=!0,_=r,G(n,"webkitTransform",s),G(n,"mozTransform",s),G(n,"msTransform",s),G(n,"transform",s),t.preventDefault()}},_appendGhost:function(){if(!n){var e,o=t.getBoundingClientRect(),r=G(t),a=this.options;z(n=t.cloneNode(!0),a.ghostClass,!1),z(n,a.fallbackClass,!0),z(n,a.dragClass,!0),G(n,"top",o.top-x(r.marginTop,10)),G(n,"left",o.left-x(r.marginLeft,10)),G(n,"width",o.width),G(n,"height",o.height),G(n,"opacity","0.8"),G(n,"position","fixed"),G(n,"zIndex","100000"),G(n,"pointerEvents","none"),a.fallbackOnBody&&E.body.appendChild(n)||i.appendChild(n),e=n.getBoundingClientRect(),G(n,"width",2*o.width-e.width),G(n,"height",2*o.height-e.height)}},_onDragStart:function(e,n){var r=this,a=e.dataTransfer,l=r.options;r._offUpEvents(),g.checkPull(r,r,t,e)&&((o=rt(t)).draggable=!1,o.style["will-change"]="",G(o,"display","none"),z(o,r.options.chosenClass,!1),r._cloneId=at(function(){i.insertBefore(o,t),Z(r,i,"clone",t)})),z(t,l.dragClass,!0),n?("touch"===n?(V(E,"touchmove",r._onTouchMove),V(E,"touchend",r._onDrop),V(E,"touchcancel",r._onDrop),l.supportPointer&&(V(E,"pointermove",r._onTouchMove),V(E,"pointerup",r._onDrop))):(V(E,"mousemove",r._onTouchMove),V(E,"mouseup",r._onDrop)),r._loopId=setInterval(r._emulateDragOver,50)):(a&&(a.effectAllowed="move",l.setData&&l.setData.call(r,a,t)),V(E,"drop",r),r._dragStartId=at(r._dragStarted))},_onDragOver:function(a){var l,s,c,f,p,m,_=this.el,D=this.options,y=D.group,w=W.active,C=g===y,E=!1,x=D.sort;if((void 0!==a.preventDefault&&(a.preventDefault(),!D.dragoverBubble&&a.stopPropagation()),!t.animated)&&(b=!0,w&&!D.disabled&&(C?x||(f=!i.contains(t)):v===this||(w.lastPullMode=g.checkPull(this,w,t,a))&&y.checkPut(this,w,t,a))&&(void 0===a.rootEl||a.rootEl===this.el))){if(F(a,D,this.el),O)return;if(l=U(a.target,D.draggable,_),s=t.getBoundingClientRect(),v!==this&&(v=this,E=!0),f)return j(w,!0),e=i,void(o||r?i.insertBefore(t,o||r):x||i.appendChild(t));if(0===_.children.length||_.children[0]===n||_===a.target&&(p=a,m=_.lastElementChild.getBoundingClientRect(),p.clientY-(m.top+m.height)>5||p.clientX-(m.left+m.width)>5)){if(0!==_.children.length&&_.children[0]!==n&&_===a.target&&(l=_.lastElementChild),l){if(l.animated)return;c=l.getBoundingClientRect()}j(w,C),!1!==J(i,_,t,s,l,c,a)&&(t.contains(_)||(_.appendChild(t),e=_),this._animate(s,t),l&&this._animate(c,l))}else if(l&&!l.animated&&l!==t&&void 0!==l.parentNode[S]){d!==l&&(d=l,h=G(l),u=G(l.parentNode));var N=(c=l.getBoundingClientRect()).right-c.left,B=c.bottom-c.top,P=T.test(h.cssFloat+h.display)||"flex"==u.display&&0===u["flex-direction"].indexOf("row"),Y=l.offsetWidth>t.offsetWidth,X=l.offsetHeight>t.offsetHeight,I=(P?(a.clientX-c.left)/N:(a.clientY-c.top)/B)>.5,M=l.nextElementSibling,A=!1;if(P){var R=t.offsetTop,L=l.offsetTop;A=R===L?l.previousElementSibling===t&&!Y||I&&Y:l.previousElementSibling===t||t.previousElementSibling===l?(a.clientY-c.top)/B>.5:L>R}else E||(A=M!==t&&!X||I&&X);var H=J(i,_,t,s,l,c,a,A);!1!==H&&(1!==H&&-1!==H||(A=1===H),O=!0,k($,30),j(w,C),t.contains(_)||(A&&!M?_.appendChild(t):l.parentNode.insertBefore(t,A?M:l)),e=t.parentNode,this._animate(s,t),this._animate(c,l))}}},_animate:function(t,e){var n=this.options.animation;if(n){var o=e.getBoundingClientRect();1===t.nodeType&&(t=t.getBoundingClientRect()),G(e,"transition","none"),G(e,"transform","translate3d("+(t.left-o.left)+"px,"+(t.top-o.top)+"px,0)"),e.offsetWidth,G(e,"transition","all "+n+"ms"),G(e,"transform","translate3d(0,0,0)"),clearTimeout(e.animated),e.animated=k(function(){G(e,"transition",""),G(e,"transform",""),e.animated=!1},n)}},_offUpEvents:function(){var t=this.el.ownerDocument;q(E,"touchmove",this._onTouchMove),q(E,"pointermove",this._onTouchMove),q(t,"mouseup",this._onDrop),q(t,"touchend",this._onDrop),q(t,"pointerup",this._onDrop),q(t,"touchcancel",this._onDrop),q(t,"pointercancel",this._onDrop),q(t,"selectstart",this)},_onDrop:function(a){var l=this.el,s=this.options;clearInterval(this._loopId),clearInterval(y.pid),clearTimeout(this._dragStartTimer),lt(this._cloneId),lt(this._dragStartId),q(E,"mouseover",this),q(E,"mousemove",this._onTouchMove),this.nativeDraggable&&(q(E,"drop",this),q(l,"dragstart",this._onDragStart)),this._offUpEvents(),a&&(b&&(a.preventDefault(),!s.dropBubble&&a.stopPropagation()),n&&n.parentNode&&n.parentNode.removeChild(n),i!==e&&"clone"===W.active.lastPullMode||o&&o.parentNode&&o.parentNode.removeChild(o),t&&(this.nativeDraggable&&q(t,"dragend",this),K(t),t.style["will-change"]="",z(t,this.options.ghostClass,!1),z(t,this.options.chosenClass,!1),Z(this,i,"unchoose",t,e,i,f,null,a),i!==e?(p=et(t,s.draggable))>=0&&(Z(null,e,"add",t,e,i,f,p,a),Z(this,i,"remove",t,e,i,f,p,a),Z(null,e,"sort",t,e,i,f,p,a),Z(this,i,"sort",t,e,i,f,p,a)):t.nextSibling!==r&&(p=et(t,s.draggable))>=0&&(Z(this,i,"update",t,e,i,f,p,a),Z(this,i,"sort",t,e,i,f,p,a)),W.active&&(null!=p&&-1!==p||(p=f),Z(this,i,"end",t,e,i,f,p,a),this.save()))),this._nulling()},_nulling:function(){i=t=e=n=r=o=a=l=s=m=_=b=p=d=h=v=g=W.active=null,A.forEach(function(t){t.checked=!0}),A.length=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragover":case"dragenter":t&&(this._onDragOver(e),function(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move");t.preventDefault()}(e));break;case"mouseover":this._onDrop(e);break;case"selectstart":e.preventDefault()}},toArray:function(){for(var t,e=[],n=this.el.children,o=0,i=n.length,r=this.options;o<i;o++)U(t=n[o],r.draggable,this.el)&&e.push(t.getAttribute(r.dataIdAttr)||tt(t));return e},sort:function(t){var e={},n=this.el;this.toArray().forEach(function(t,o){var i=n.children[o];U(i,this.options.draggable,n)&&(e[t]=i)},this),t.forEach(function(t){e[t]&&(n.removeChild(e[t]),n.appendChild(e[t]))})},save:function(){var t=this.options.store;t&&t.set(this)},closest:function(t,e){return U(t,e||this.options.draggable,this.el)},option:function(t,e){var n=this.options;if(void 0===e)return n[t];n[t]=e,"group"===t&&H(n)},destroy:function(){var t=this.el;t[S]=null,q(t,"mousedown",this._onTapStart),q(t,"touchstart",this._onTapStart),q(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(q(t,"dragover",this),q(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),R.splice(R.indexOf(this._onDragOver),1),this._onDrop(),this.el=t=null}},V(E,"touchmove",function(t){W.active&&t.preventDefault()}),W.utils={on:V,off:q,css:G,find:Q,is:function(t,e){return!!U(t,e,t)},extend:it,throttle:ot,closest:U,toggleClass:z,clone:rt,index:et,nextTick:at,cancelNextTick:lt},W.create=function(t,e){return new W(t,e)},W.version="1.7.0",W});

/**
 * jQuery MD5 Plugin 1.2.1
 * https://github.com/blueimp/jQuery-MD5
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://creativecommons.org/licenses/MIT/
 *
 */
!function(n){"use strict";function r(n,r){var t=(65535&n)+(65535&r);return(n>>16)+(r>>16)+(t>>16)<<16|65535&t}function t(n,t,e,u,o,c){return r((f=r(r(t,n),r(u,c)))<<(i=o)|f>>>32-i,e);var f,i}function e(n,r,e,u,o,c,f){return t(r&e|~r&u,n,r,o,c,f)}function u(n,r,e,u,o,c,f){return t(r&u|e&~u,n,r,o,c,f)}function o(n,r,e,u,o,c,f){return t(r^e^u,n,r,o,c,f)}function c(n,r,e,u,o,c,f){return t(e^(r|~u),n,r,o,c,f)}function f(n,t){n[t>>5]|=128<<t%32,n[14+(t+64>>>9<<4)]=t;var f,i,a,h,g,l=1732584193,v=-271733879,d=-1732584194,C=271733878;for(f=0;f<n.length;f+=16)i=l,a=v,h=d,g=C,v=c(v=c(v=c(v=c(v=o(v=o(v=o(v=o(v=u(v=u(v=u(v=u(v=e(v=e(v=e(v=e(v,d=e(d,C=e(C,l=e(l,v,d,C,n[f],7,-680876936),v,d,n[f+1],12,-389564586),l,v,n[f+2],17,606105819),C,l,n[f+3],22,-1044525330),d=e(d,C=e(C,l=e(l,v,d,C,n[f+4],7,-176418897),v,d,n[f+5],12,1200080426),l,v,n[f+6],17,-1473231341),C,l,n[f+7],22,-45705983),d=e(d,C=e(C,l=e(l,v,d,C,n[f+8],7,1770035416),v,d,n[f+9],12,-1958414417),l,v,n[f+10],17,-42063),C,l,n[f+11],22,-1990404162),d=e(d,C=e(C,l=e(l,v,d,C,n[f+12],7,1804603682),v,d,n[f+13],12,-40341101),l,v,n[f+14],17,-1502002290),C,l,n[f+15],22,1236535329),d=u(d,C=u(C,l=u(l,v,d,C,n[f+1],5,-165796510),v,d,n[f+6],9,-1069501632),l,v,n[f+11],14,643717713),C,l,n[f],20,-373897302),d=u(d,C=u(C,l=u(l,v,d,C,n[f+5],5,-701558691),v,d,n[f+10],9,38016083),l,v,n[f+15],14,-660478335),C,l,n[f+4],20,-405537848),d=u(d,C=u(C,l=u(l,v,d,C,n[f+9],5,568446438),v,d,n[f+14],9,-1019803690),l,v,n[f+3],14,-187363961),C,l,n[f+8],20,1163531501),d=u(d,C=u(C,l=u(l,v,d,C,n[f+13],5,-1444681467),v,d,n[f+2],9,-51403784),l,v,n[f+7],14,1735328473),C,l,n[f+12],20,-1926607734),d=o(d,C=o(C,l=o(l,v,d,C,n[f+5],4,-378558),v,d,n[f+8],11,-2022574463),l,v,n[f+11],16,1839030562),C,l,n[f+14],23,-35309556),d=o(d,C=o(C,l=o(l,v,d,C,n[f+1],4,-1530992060),v,d,n[f+4],11,1272893353),l,v,n[f+7],16,-155497632),C,l,n[f+10],23,-1094730640),d=o(d,C=o(C,l=o(l,v,d,C,n[f+13],4,681279174),v,d,n[f],11,-358537222),l,v,n[f+3],16,-722521979),C,l,n[f+6],23,76029189),d=o(d,C=o(C,l=o(l,v,d,C,n[f+9],4,-640364487),v,d,n[f+12],11,-421815835),l,v,n[f+15],16,530742520),C,l,n[f+2],23,-995338651),d=c(d,C=c(C,l=c(l,v,d,C,n[f],6,-198630844),v,d,n[f+7],10,1126891415),l,v,n[f+14],15,-1416354905),C,l,n[f+5],21,-57434055),d=c(d,C=c(C,l=c(l,v,d,C,n[f+12],6,1700485571),v,d,n[f+3],10,-1894986606),l,v,n[f+10],15,-1051523),C,l,n[f+1],21,-2054922799),d=c(d,C=c(C,l=c(l,v,d,C,n[f+8],6,1873313359),v,d,n[f+15],10,-30611744),l,v,n[f+6],15,-1560198380),C,l,n[f+13],21,1309151649),d=c(d,C=c(C,l=c(l,v,d,C,n[f+4],6,-145523070),v,d,n[f+11],10,-1120210379),l,v,n[f+2],15,718787259),C,l,n[f+9],21,-343485551),l=r(l,i),v=r(v,a),d=r(d,h),C=r(C,g);return[l,v,d,C]}function i(n){var r,t="";for(r=0;r<32*n.length;r+=8)t+=String.fromCharCode(n[r>>5]>>>r%32&255);return t}function a(n){var r,t=[];for(t[(n.length>>2)-1]=void 0,r=0;r<t.length;r+=1)t[r]=0;for(r=0;r<8*n.length;r+=8)t[r>>5]|=(255&n.charCodeAt(r/8))<<r%32;return t}function h(n){var r,t,e="0123456789abcdef",u="";for(t=0;t<n.length;t+=1)r=n.charCodeAt(t),u+=e.charAt(r>>>4&15)+e.charAt(15&r);return u}function g(n){return unescape(encodeURIComponent(n))}function l(n){return i(f(a(r=g(n)),8*r.length));var r}function v(n,r){return function(n,r){var t,e,u=a(n),o=[],c=[];for(o[15]=c[15]=void 0,u.length>16&&(u=f(u,8*n.length)),t=0;t<16;t+=1)o[t]=909522486^u[t],c[t]=1549556828^u[t];return e=f(o.concat(a(r)),512+8*r.length),i(f(c.concat(e),640))}(g(n),g(r))}n.md5=function(n,r,t){return r?t?v(r,n):h(v(r,n)):t?l(n):h(l(n))}}("function"==typeof jQuery?jQuery:this);

$( document ).ready(function() {
    EMBED.Init(true);
});