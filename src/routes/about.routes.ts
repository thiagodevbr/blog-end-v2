import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import AboutRepository from '../repositories/AboutRepository';
import CreateAboutRepository from '../services/about/CreateAboutServices';
import UpdateAboutServices from '../services/about/UpdateAboutServices';

import TechRepository from '../repositories/TechRepository';
import CreateTechServices from '../services/tech/CreateTechServices';
import DeleteTechServices from '../services/tech/DeleteTechServices';
import UpdateTechServices from '../services/tech/UpdateTechServices';

import CreateSkillsServices from '../services/skills/CreateSkillsServices';
import SkillRepository from '../repositories/SkillRepository';
import DeleteSkillServices from '../services/skills/DeleteSkillsServices';
import UpdateSkillServices from '../services/skills/UpdateSkillServices';

import ExperienceRepository from '../repositories/ExperienceRepository';
import CreateExperienceServices from '../services/experiences/CreateExperienceServices';
import UpdateExperienceServices from '../services/experiences/UpdateExperienceServices';
import DeleteExperienceServices from '../services/experiences/DeleteExperienceServices';

import EducationRepository from '../repositories/EducationRepository';
import CreateEducationServices from '../services/education/CreateEducationServices';
import UpdateEducationServices from '../services/education/UpdateEducationServices';
import DeleteEducationServices from '../services/education/DeleteEducationServices';

import SocialMediaRepository from '../repositories/SocialMediaRepository';
import CreateSocialMediaServices from '../services/socialmedias/CreateSocialServices';
import UpdateSocialMediaServices from '../services/socialmedias/UpdateSocialServices';
import DeleteSocialMediaServices from '../services/socialmedias/DeleteSocialServices';

import CreateResumeServices from '../services/resume/CreateResumeServices';
import ResumeRepository from '../repositories/ResumeRepository';

const routes = Router();

routes.get('/', async (_, response) => {
  const aboutRepository = getCustomRepository(AboutRepository);
  try {
    const aboutList = await aboutRepository.find();
    return response.json(aboutList);
  } catch (err) {
    return response.status(401).json(err);
  }
});

routes.post('/', async (request, response) => {
  const { title, description } = request.body;
  const createAbout = new CreateAboutRepository();
  try {
    const about = await createAbout.execute({ title, description });
    return response.json(about);
  } catch (err) {
    return response.status(401).json(err);
  }
});

routes.put('/:id', async (request, response) => {
  const { id } = request.params;
  const { title, description } = request.body;
  const updateAbout = new UpdateAboutServices();
  try {
    const about = await updateAbout.execute({ id, title, description });
    return response.json(about);
  } catch (err) {
    return response.status(401).json(err);
  }
});

routes.post('/techs', async (request, response) => {
  const { tech_url, description } = request.body;
  const createTech = new CreateTechServices();
  try {
    const tech = await createTech.execute({ tech_url, description });
    return response.json(tech);
  } catch (err) {
    return response.status(401).json(err);
  }
});

routes.get('/techs', async (_, response) => {
  const techList = getCustomRepository(TechRepository);
  try {
    const listOfTechs = await techList.find();
    return response.json(listOfTechs);
  } catch (err) {
    return response.status(401).json(err);
  }
});

routes.delete('/techs/:id', async (request, response) => {
  const { id } = request.params;
  const deleteTech = new DeleteTechServices();
  try {
    await deleteTech.execute({ id });
    return response.status(201).json();
  } catch (err) {
    return response.status(401).json(err);
  }
});

routes.put('/techs/:id', async (request, response) => {
  const { id } = request.params;
  const { tech_url, description } = request.body;
  try {
    const updateTech = new UpdateTechServices();
    const tech = await updateTech.execute({ id, tech_url, description });
    return response.json(tech);
  } catch (err) {
    return response.status(401).json(err);
  }
});

routes.post('/resume/skills', async (request, response) => {
  const { icon_name, title, time } = request.body;
  const createSkill = new CreateSkillsServices();
  try {
    const skill = await createSkill.execute({ icon_name, time, title });
    return response.json(skill);
  } catch (err) {
    return response.status(401).json(err);
  }
});

routes.get('/resume/skills', async (request, response) => {
  const skillRepository = getCustomRepository(SkillRepository);
  try {
    const skillList = await skillRepository.find();
    return response.json(skillList);
  } catch (err) {
    return response.status(401).json(err);
  }
});

routes.delete('/resume/skills/:id', async (request, response) => {
  const { id } = request.params;
  const deleteSkill = new DeleteSkillServices();
  try {
    await deleteSkill.execute({ id });
    return response.status(201).json();
  } catch (err) {
    return response.status(401).json(err);
  }
});

routes.put('/resume/skills/:id', async (request, response) => {
  const { id } = request.params;
  const { icon_name, title, time } = request.body;
  const updateSkill = new UpdateSkillServices();
  try {
    const skill = await updateSkill.execute({ id, icon_name, time, title });
    return response.json(skill);
  } catch (err) {
    return response.status(401).json(err);
  }
});

routes.get('/resume', async (request, response) => {
  const resumeRepository = getCustomRepository(ResumeRepository);
  const skillsRepository = getCustomRepository(SkillRepository);
  try {
    const resume = await resumeRepository.find();
    const skills = await skillsRepository.find({
      where: { resume_id: resume[0].id },
    });
    const data = {
      resume,
      skills,
    };
    return response.json(data);
  } catch (err) {
    return response.status(401).json(err);
  }
});

routes.post('/resume', async (request, response) => {
  const { fullname, job_title, short_description, phone, email } = request.body;
  const createResume = new CreateResumeServices();
  try {
    const resume = await createResume.execute({
      fullname,
      job_title,
      short_description,
      phone,
      email,
    });
    return response.json(resume);
  } catch (err) {
    return response.status(401).json(err);
  }
});

routes.post('/resume/experience', async (request, response) => {
  const { title, time, description } = request.body;
  const createExperience = new CreateExperienceServices();
  try {
    const experience = await createExperience.execute({
      title,
      time,
      description,
    });
    return response.json(experience);
  } catch (err) {
    return response.status(401).json(err);
  }
});

routes.get('/resume/experience', async (request, response) => {
  const experienceRepository = getCustomRepository(ExperienceRepository);
  try {
    const experienceList = await experienceRepository.find();
    return response.json(experienceList);
  } catch (err) {
    return response.status(401).json(err);
  }
});

routes.put('/resume/experience/:id', async (request, response) => {
  const { id } = request.params;
  const { description, title, time } = request.body;
  const updateExperience = new UpdateExperienceServices();
  try {
    const experience = await updateExperience.execute({
      id,
      description,
      time,
      title,
    });
    return response.json(experience);
  } catch (err) {
    return response.status(401).json(err);
  }
});

routes.delete('/resume/experience/:id', async (request, response) => {
  const { id } = request.params;
  const deleteExperience = new DeleteExperienceServices();
  try {
    await deleteExperience.execute({ id });
    return response.status(201).json();
  } catch (err) {
    return response.status(401).json(err);
  }
});

routes.post('/resume/education', async (request, response) => {
  const { title, time, description } = request.body;
  const createEducation = new CreateEducationServices();
  try {
    const education = await createEducation.execute({
      title,
      time,
      description,
    });
    return response.json(education);
  } catch (err) {
    return response.status(401).json(err);
  }
});

routes.get('/resume/education', async (request, response) => {
  const educationRepository = getCustomRepository(EducationRepository);
  try {
    const educationList = await educationRepository.find();
    return response.json(educationList);
  } catch (err) {
    return response.status(401).json(err);
  }
});

routes.put('/resume/education/:id', async (request, response) => {
  const { id } = request.params;
  const { description, title, time } = request.body;
  const updateEducation = new UpdateEducationServices();
  try {
    const education = await updateEducation.execute({
      id,
      description,
      time,
      title,
    });
    return response.json(education);
  } catch (err) {
    return response.status(401).json(err);
  }
});

routes.delete('/resume/education/:id', async (request, response) => {
  const { id } = request.params;
  const deleteEducation = new DeleteEducationServices();
  try {
    await deleteEducation.execute({ id });
    return response.status(201).json();
  } catch (err) {
    return response.status(401).json(err);
  }
});

routes.post('/resume/socialmedia', async (request, response) => {
  const { title, url, icon_name } = request.body;
  const createSocialMedia = new CreateSocialMediaServices();
  try {
    const socialMedia = await createSocialMedia.execute({
      title,
      icon_name,
      url,
    });
    return response.json(socialMedia);
  } catch (err) {
    return response.status(401).json(err);
  }
});

routes.get('/resume/socialmedia', async (request, response) => {
  const socialMediaRepository = getCustomRepository(SocialMediaRepository);
  try {
    const socialMediaList = await socialMediaRepository.find();
    return response.json(socialMediaList);
  } catch (err) {
    return response.status(401).json(err);
  }
});

routes.put('/resume/socialmedia/:id', async (request, response) => {
  const { id } = request.params;
  const { icon_name, title, url } = request.body;
  const updateSocialMedia = new UpdateSocialMediaServices();
  try {
    const socialMedia = await updateSocialMedia.execute({
      id,
      icon_name,
      url,
      title,
    });
    return response.json(socialMedia);
  } catch (err) {
    return response.status(401).json(err);
  }
});

routes.delete('/resume/socialmedia/:id', async (request, response) => {
  const { id } = request.params;
  const deleteSocialMedia = new DeleteSocialMediaServices();
  try {
    await deleteSocialMedia.execute({ id });
    return response.status(201).json();
  } catch (err) {
    return response.status(401).json(err);
  }
});

export default routes;
