// Pages
import { Home, MyMusic, Radio, ZingChart, Following, Album } from '../pages';

// icons
import {
    BsMusicPlayer,
    BsPlayCircle,
    BsReverseLayoutTextWindowReverse,
    BsMusicNoteBeamed,
    BsStar,
    BsCameraVideo,
} from 'react-icons/bs';
import { AiOutlineLineChart } from 'react-icons/ai';
import { VscRadioTower } from 'react-icons/vsc';
import { BiCategoryAlt } from 'react-icons/bi';

import { IconSong, IconPlaylist, IconRecently } from '../components/Icons';

// main routes
export const mainLinks = [
    { path: '/mp3/mymusic', component: MyMusic, title: 'Personal', iconLeft: <BsMusicPlayer /> },
    { path: '/mp3', component: Home, title: 'Explore', iconLeft: <BsPlayCircle /> },
    { path: '/mp3/zingchart', component: ZingChart, title: '#zingchart', iconLeft: <AiOutlineLineChart /> },
    { path: '/mp3/radio', component: Radio, title: 'Radio', iconLeft: <VscRadioTower />, separate: 'Live' },
    // { path: '/following', component: Following, title: 'Following', iconLeft: <BsReverseLayoutTextWindowReverse /> },
];

export const mainRoutes = [
    { path: '/mp3/mymusic', component: MyMusic },
    { path: '/mp3/album/:idList', component: Album },
    { path: '/mp3', component: Home },
    { path: '/mp3/zingchart', component: ZingChart },
    { path: '/mp3/radio', component: Radio },
    // { path: '/following', component: Following },
];

// Secondary routes
export const secondaryRoutes = [
    { title: 'New Music', iconLeft: <BsMusicNoteBeamed /> },
    { title: 'Category', iconLeft: <BiCategoryAlt /> },
    { title: 'Top 100', iconLeft: <BsStar /> },
    { title: 'Mv', iconLeft: <BsCameraVideo /> },
];

// libraries
export const libraries = [
    { title: 'Songs', iconLeft: <IconSong /> },
    { title: 'Playlist', iconLeft: <IconPlaylist /> },
    { title: 'Recently', iconLeft: <IconRecently /> },
];
