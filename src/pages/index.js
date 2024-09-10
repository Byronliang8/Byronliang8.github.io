import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import { ExperienceEntry, EducationEntry, PublicationEntry } from '../components/curriculumEntry';
import { Link } from 'gatsby';
import * as icons from 'react-icons/ri';
import scrollTo from 'gatsby-plugin-smoothscroll';

const IndexPage = () => {
  return (
    <div className="mx-auto">
      <div className="flex flex-col lg:flex-row place-items-center lg:place-items-start space-y-12 lg:space-x-12">
        {/* Photo and social links */}
        <div className="flex flex-col lg:px-6 lg:sticky top-24 place-items-center space-y-6 lg:mb-24">
          {/* Photo */}
          <StaticImage
            src="../images/self.jpg"
            alt="Me"
            className="rounded-full h-64 w-64 object-cover mt-4"
          />
          {/* Social links */}
          <div className='flex flex-row mx-auto place-items-center space-x-8 overflow-visible'>
            <Link href="https://www.linkedin.com/" target='_blank' className='hover:scale-125 cursor-pointer transition ease-in-out duration-300' aria-label="LinkedIn">
              <icons.RiLinkedinBoxFill size={32}></icons.RiLinkedinBoxFill>
            </Link>
            <Link href="https://github.com/" target='_blank' className='hover:scale-125 cursor-pointer transition ease-in-out duration-300' aria-label="Github">
              <icons.RiGithubFill size={32}></icons.RiGithubFill>
            </Link>
            <Link href="https://www.twitter.com/" className='hover:scale-125 cursor-pointer transition ease-in-out duration-300' aria-label="Twitter">
              <icons.RiTwitterFill size={32}></icons.RiTwitterFill>
            </Link>
            <Link href="https://scholar.google.com/" target='_blank' className='hover:scale-125 cursor-pointer transition ease-in-out duration-300' aria-label='Google Scholar'>
              <i className="ai ai-google-scholar ai-size-32"></i>
            </Link>
            <Link href="https://drive.google.com/" target='_blank' className='hover:scale-125 cursor-pointer transition ease-in-out duration-300' aria-label='CV'>
              <i className="ai ai-cv ai-size-32"></i>
            </Link>
          </div>

          {/* Quick links */}
          <div className='hidden lg:flex flex-col w-1/3 items-start'>
            <div className='flex flex-row place-items-center group'>
              <hr className='w-6 group-hover:w-8 mr-2 border-1 border-slate-800 dark:border-white group-transition ease-in-out duration-300'></hr>
              <button onClick={() => scrollTo("#experience")} className='peer group-hover:underline'>Experience</button>
            </div>
            <div className='flex flex-row place-items-center group'>
              <hr className='w-6 group-hover:w-8 mr-2 border-1 border-slate-800 dark:border-white group-transition ease-in-out duration-300'></hr>
              <button onClick={() => scrollTo("#education")} className='peer group-hover:underline'>Education</button>
            </div>
            <div className='flex flex-row items-center group'>
                <hr className='w-6 group-hover:w-8 mr-2 border-1 border-slate-800 dark:border-white group-transition ease-in-out duration-300'></hr>
                <button onClick={() => scrollTo("#publications")} className='peer hover:underline'>Publications</button>
            </div>
            <div className='flex flex-row items-center group'>
              <hr className='w-6 group-hover:w-8 mr-2 border-1 border-slate-800 dark:border-white group-transition ease-in-out duration-300'></hr>
              <button onClick={() => scrollTo("#contact")} className='peer hover:underline'>Contact</button>
            </div>
          </div>
        </div>

        {/* Text and content */}
        <div className="container flex flex-col">
          <h1 className="text-3xl font-bold mb-4">Yuanbang Liang</h1>
          <h1 className="font-bold mb-4">PhD candidate in computer science @ Cardiff University</h1>
          <p className="mb-4">
            I am a PhD candidate in Visual Computing research section, the School of Computer Science and Informatics,
            Cardiff University. My thesis topic is <i>Uncovering the “Instincts” of Deep Generative Models for Fair and Unbiased
            Visual Content Creation</i>, supervised by Dr. Yipeng Qin, Prof. Yu-Kun Lai and Dr. Jing Wu and this project
            is <b>Fully funded by Engineering and Physical Sciences Research Council (EPSRC) DTP studentships</b>.
          </p>
          <p className="mb-4">
            My research interests are centred around machine learning and its applications in computer vision, computer graphics
            and content generation. My current research revolves around the hubness phenomenon to uncover the relationship between
            the hyper-dimensional distribution and the generative models. With my recent findings, there is a strong correlation
            between the manifold of the model and the sampling distribution in hyper dimension.
          </p>
          <p className="mb-4">
            Now I'm Expecting to graduate before 2025 and looking for the research jobs.
          </p>

          {/* Timeline */}
          {/*<section>*/}
          {/*  <div id="experience" className='-translate-y-16'/>*/}
          {/*  <h1 className='text-2xl py-4 font-medium'>Experience</h1>*/}
          {/*  <ExperienceEntry*/}
          {/*    date={'Jan\u00a02022 - Dec\u00a02022'}*/}
          {/*    title={'Job 3'}*/}
          {/*    company={'Company 3'}*/}
          {/*    description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}*/}
          {/*    tags={['Skill 1', 'Skill 2', 'Skill 3']}*/}
          {/*  />*/}
          {/*  <ExperienceEntry*/}
          {/*    date={'Jan\u00a02021 - Dec\u00a02021'}*/}
          {/*    title={'Job 2'}*/}
          {/*    company={'Company 2'}*/}
          {/*    description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}*/}
          {/*    tags={['Skill 1', 'Skill 2', 'Skill 3']}*/}
          {/*  />*/}
          {/*  <ExperienceEntry*/}
          {/*    date={'Jan\u00a02020 - Dec\u00a02020'}*/}
          {/*    title={'Job 1'}*/}
          {/*    company={'Company 1'}*/}
          {/*    description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}*/}
          {/*    tags={['Skill 1', 'Skill 2', 'Skill 3']}*/}
          {/*  />*/}
          {/*</section>*/}

          <section>
            <div id="education" className='-translate-y-16'/>
            <h1 className='text-2xl py-4 font-medium'>Education</h1>
            <EducationEntry
              date={'2021 - till now'}
              university={'Cardiff University'}
              degree={'Doctor of Philosophy'}
              description={'Thesis title: Uncovering the “Instincts” of Deep Generative Models for Fair and Unbiased\n' +
                  'Visual Content Creation. Supervised by Yipeng Qin, Yu-Kun Lai and Jing Wu.'}
              tags={['Deep Learning', 'Generative Models', 'Hubness Phenomenon']}
            />
            <EducationEntry
              date={'2020 - 2021'}
              university={'University of Bristol'}
              degree={'Master of Science'}
              description={'Engineering Mathematics. GPA:3.5/4.0'}
              tags={['Partial Differential Equations', 'Applied Statistics', 'Machine Learning and Mathematics']}
            />

            <EducationEntry
              date={'2018 - 2020'}
              university={'University of Liverpool'}
              degree={'Bachelor of Science'}
              description={'Computer Science. GPA:3.8/4.0'}
              tags={['Algorithm and Optimisation', 'Data Science', 'Intelligent Information Systems']}
            />

            <EducationEntry
              date={'2016 - 2018'}
              university={"Xi'an Jiao-Tong Liverpool University (XJTLU)"}
              degree={'Bachelor of Science'}
              description={'Information and Computer Science. GPA:3.8/4.0'}
              tags={['Algorithm and Data Structure', 'Discrete Mathematics and Probabilistic', 'Calculus']}
            />
          </section>

          <section>
            <div id="publications" className='-translate-y-16'/>
            <h1 className='text-2xl py-4 font-medium'>Publications</h1>
            <PublicationEntry
              date={'2024'}
              title={'Deep generative model based rate-distortion for image\n' +
                  'downscaling assessment'}
              A={'(Oral, top 0.8%)'}
              authors={'Y. Liang, H. Garg, P. L. Rosin, and Y. Qin'}
              journal={'IEEE/CVF Conference on Computer Vision and Pattern\n' +
                  'Recognition (CVPR)'}
              tags={['Keyword 1', 'Keyword 2', 'Keyword 3']}
            />
            <PublicationEntry
              date={'2022'}
              title={'Publication 1'}
              authors={'Author 1, Author 2, Author 3'}
              journal={'Journal 1'}
              tags={['Keyword 1', 'Keyword 2', 'Keyword 3']}
            />
          </section>

          <section id="contact">
            <div id="contact" className='-translate-y-16'/>
            <h1 className='text-2xl py-4 font-medium'>Contact</h1>
            <p>
              If you are interested in discussing, please feel free to reach out ! You can contact me at the following email adress: 
            </p>    
            <p>
              contact Liangy32@cardiff.ac.uk
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage