import styles from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
    return (
<div className={styles.profileBox}>
  <div>
      <img
      className={styles.profileImg}
      src={image}
      alt="User avatar"
    />
    <p className={styles.profileName}>{name}</p>
    <p className={styles.profileTag}>@{tag}</p>
    <p className={styles.profileLocation}>{location}</p>
  </div>

  <ul className={styles.profileList}>
    <li className={styles.profileListItem}>
      <span className={styles.itemTitle}>Followers</span>
      <span>{stats.followers}</span>
    </li>
    <li className={styles.profileListItem}>
      <span className={styles.itemTitle}>Views</span>
      <span>{stats.views}</span>
    </li>
    <li className={styles.profileListItem}>
      <span className={styles.itemTitle}>Likes</span>
      <span>{stats.likes}</span>
    </li>
  </ul>
</div>
)
}

