import { View, Text, Image, Pressable } from 'react-native'
import styles from './nearbyjobcard.style'
import { checkImageURL } from '../../../../utils'

const NearbyJobCard = ({ job, handleCardPress, handleNavigate}) => {
  return (
    <Pressable
      style={styles.container}
      // onPress={() => handleCardPress(job)}
      onPress={handleNavigate}
      >
      <Pressable style={styles.logoContainer}>
        <Image 
          source={{ 
            uri: checkImageURL(job.employer_logo) 
            ? job.employer_logo : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"}}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </Pressable>
      

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text style={styles.jobType}>{job.job_employment_type}</Text>
      </View>
    </Pressable>
  )
}

export default NearbyJobCard