import PropTypes from 'prop-types';

const navMenu = [
  {
    url: '#about',
    name: 'About',
  },
  {
    url: '#education',
    name: 'Education',
  },
  {
    url: '#skills',
    name: 'Skills',
  },
  {
    url: '#experience',
    name: 'Experience',
  },
  {
    url: '#projects',
    name: 'Projects',
  },
];

export function RightNavSection() {
  return (
    <>
      <ul className='flex items-center justify-between gap-3 text-sm md:gap-4 md:text-lg lg:text-xl lg:gap-7'>
        {navMenu.map((navItem) => (
          <NavMenuItem
            key={navItem.name}
            url={navItem.url}
            name={navItem.name}
          />
        ))}
      </ul>
    </>
  );
}

function NavMenuItem({ url, name }) {
  return (
    <li
      key={navItem.name}
      className='duration-300 active:scale-105 active:shadow-lg active:text-[#00b1b1] lg:hover:scale-110 lg:hover:text-[#00b1b1] lg:hover:[text-shadow:0_0_15px_#00b1b1]'
    >
      <a href={navItem.url}>{navItem.name}</a>
    </li>
  );
}

NavMenuItem.PropTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}
