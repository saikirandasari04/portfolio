import Image from 'next/image';

import KiranFullPose from '/public/images/kiran_full.jpg';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={KiranFullPose}
              alt="Fullpose of Kiran"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: "cover" }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            Curious about me? Here you have it:
          </Typography>
          <Typography>
            I am a passionate Software developer with 2 years of
            hands-on experience in building and maintaining web applications.
            Throughout my career, I have gained a strong understanding of
            MongoDB, Express.js, React, React Native and Node.js, which are the core
            technologies of the MERN stack also. I have worked on various projects,
            both individually and as part of a team, helping to develop
            user-friendly, scalable, and responsive applications. My expertise
            includes creating efficient back-end APIs, implementing front-end
            designs with React, and managing databases using MongoDB.
          </Typography>
          <Typography>
            In addition to my technical skills, I am also aware of digital
            marketing workflows and how web development integrates with
            marketing strategies. This awareness has helped me build
            applications that are not only functional but also aligned with
            business goals. I have experience in business development,
            collaborating with stakeholders to ensure that the technical
            solutions meet the business requirements. Additionally, I have
            attended product-level meetings and worked closely with designers to
            ensure that the user interface and experience align with the overall
            product vision.
          </Typography>
          <Typography>
            As a software engineer, I am committed to writing clean and
            maintainable code while staying up to date with the latest trends
            and technologies in web development. I am constantly seeking
            opportunities to improve my skills, whether through practical
            experience or learning from others, and I always aim to deliver
            solutions that meet the needs and expectations of the project.
          </Typography>
          {/* <Typography>
            where I share tech-related bites and build in public, or you can
            follow me on{" "}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.GITHUB}
            >
              GitHub
            </Link>
            .
          </Typography> */}
          <Typography>Finally, some quick bits about me.</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">Recognized as the "Best Disciplined Employee of the Year"</Typography>
              <Typography component="li">Certified Fullstack Developer</Typography>
              <Typography component="li">
                B.Com in Computers
              </Typography>
            </ul>
          </div>
          <Typography>
            One last thing, I m available for freelance work, so feel free
            to reach out and say hello! I promise I don t bite 😉
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
